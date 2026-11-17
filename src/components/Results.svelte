<script lang="ts">
  import { onMount } from 'svelte';
  import { fly, slide } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import type { Answers, Denomination, Question } from '../data/types';
  import { rankAll, compassFromAnswers, compassForDenomination, progressiveScore, type MatchResult } from '../lib/scoring';
  import { latestResult, decodeAnswers, encodeAnswers, pushHistory, updateLatest } from '../lib/storage';
  import AiReading from './AiReading.svelte';
  import { useT, href, type Lang } from '../i18n';
  import { familyName } from '../i18n/labels';
  import Badge from './Badge.svelte';
  import Donut from './Donut.svelte';
  import CompassChart from './CompassChart.svelte';

  let { questions, denominations, lang }: { questions: Question[]; denominations: Denomination[]; lang: Lang } = $props();
  const t = useT(lang);

  const byId = Object.fromEntries(denominations.map((d) => [d.id, d]));
  const qById = Object.fromEntries(questions.map((q) => [q.id, q]));

  let answers = $state<Answers | null>(null);
  let shared = $state(false);
  let loaded = $state(false);
  let open = $state<string | null>(null);
  let copied = $state(false);
  let showAll = $state(false);

  onMount(() => {
    const m = location.hash.match(/a=([0-9_]+)/);
    if (m) {
      const decoded = decodeAnswers(m[1], questions);
      if (decoded) {
        answers = decoded;
        shared = true;
        const latest = latestResult();
        // a link to your own latest result is not "someone else's"
        if (latest && encodeAnswers(latest.answers, questions) === m[1]) shared = false;
      }
    }
    if (!answers) answers = latestResult()?.answers ?? null;
    loaded = true;
  });

  const ranked = $derived<MatchResult[]>(answers ? rankAll(denominations, questions, answers) : []);
  const top = $derived(ranked[0]);
  const topD = $derived(top ? byId[top.id] : null);
  const answeredCount = $derived(answers ? Object.values(answers).filter((a) => a && a !== 'skip').length : 0);
  const close = $derived(ranked.slice(1).filter((r) => top && top.raw - r.raw < 0.03));
  const you = $derived(answers ? compassFromAnswers(questions, answers) : null);
  const points = $derived(
    denominations.map((d) => ({ id: d.id, name: d.short, color: d.color, ...compassForDenomination(d, questions) })),
  );
  const prog = $derived(answers ? progressiveScore(answers) : null);
  const progLabel = $derived(prog === null ? '' : prog < 0.34 ? t('Traditional') : prog < 0.67 ? t('Moderate') : t('Progressive'));
  const visible = $derived(showAll ? ranked : ranked.slice(0, 8));

  function headline(p: number) {
    if (p === 100) return t('A perfect match');
    if (p >= 90) return t('A near-perfect match');
    if (p >= 75) return t('Your closest match');
    return t('Your closest match - loosely');
  }

  function stanceLabel(d: Denomination, qid: string) {
    const st = d.stances[qid] ?? {};
    const q = qById[qid];
    const max = Math.max(0, ...Object.values(st));
    if (max === 0) return ' - ';
    return q.options.filter((o) => (st[o.id] ?? 0) === max).map((o) => o.short ?? o.label).join(' / ');
  }

  function answerLabel(qid: string, a: string) {
    const o = qById[qid].options.find((x) => x.id === a);
    return o?.short ?? o?.label ?? a;
  }

  async function share() {
    if (!answers) return;
    const url = `${location.origin}${href(lang, '/results')}#a=${encodeAnswers(answers, questions)}`;
    try {
      if (navigator.share && matchMedia('(pointer:coarse)').matches) {
        await navigator.share({ title: t('My Denomination Compass result'), text: t('I matched {percent}% with {name}', { percent: top.percent, name: topD?.name }), url });
      } else {
        await navigator.clipboard.writeText(url);
        copied = true;
        setTimeout(() => (copied = false), 1800);
      }
    } catch { /* user cancelled */ }
  }

  function saveShared() {
    if (!answers) return;
    pushHistory({ answers: $state.snapshot(answers) as Answers, topId: top.id, topPercent: top.percent, finishedAt: Date.now() });
    shared = false;
    history.replaceState(null, '', href(lang, '/results'));
  }

  function applySuggestion(qid: string, oid: string) {
    if (!answers) return;
    answers[qid] = oid;
    const snap = $state.snapshot(answers) as Answers;
    const r = rankAll(denominations, questions, snap);
    updateLatest(snap, r[0].id, r[0].percent);
  }

  const mark = (s: number) => (s >= 0.75 ? 'agree' : s >= 0.25 ? 'partial' : 'disagree');
</script>

{#if !loaded}
  <div class="min-h-[60vh]"></div>
{:else if !answers || !top || !topD}
  <section class="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center text-center">
    <p class="eyebrow">{t('No results yet')}</p>
    <h1 class="mt-3 font-display text-3xl">{t('Take the quiz first')}</h1>
    <a href={href(lang, '/quiz')} class="btn btn-primary mt-8">{t('Start the quiz')}</a>
  </section>
{:else}
  <div class="pt-8 sm:pt-12">
    {#if shared}
      <div class="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-surface-2 px-4 py-3 text-sm">
        <span>{t('Shared result')}</span>
        <span class="flex gap-2">
          <button class="font-semibold underline-offset-4 hover:underline" onclick={saveShared}>{t('Save')}</button>
          <span class="text-muted">·</span>
          <a href={href(lang, '/quiz')} class="font-semibold underline-offset-4 hover:underline">{t('Take it yourself')}</a>
        </span>
      </div>
    {/if}

    <!-- Traditional ↔ progressive (marriage, abortion, women's ordination); only from your answers. -->
    {#if prog !== null}
      <div class="mb-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] font-semibold tracking-wide whitespace-nowrap text-muted uppercase" title={t('Based on your answers on marriage, abortion and women’s ordination.')}>
        <span>{t('Traditional')}</span>
        <span class="relative h-1.5 w-20 flex-none rounded-full bg-gradient-to-r from-[#8a6d3b]/50 via-line to-[#5b7fb5]/50 sm:w-40" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow={Math.round(prog * 100)} aria-label={`${t('Moral views')}: ${progLabel}`}>
          <span class="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-bg bg-ink" style="left:{prog * 100}%"></span>
        </span>
        <span>{t('Progressive')}</span>
        <span class="rounded-full bg-surface-2 px-2 py-0.5 text-ink normal-case tracking-normal">{progLabel}</span>
      </div>
    {/if}

    <!-- HERO -->
    <section
      class="card relative overflow-hidden p-6 sm:p-10"
      style="background: radial-gradient(120% 90% at 0% 0%, color-mix(in oklab, {topD.color} 22%, transparent), transparent 60%), var(--surface);"
      in:fly={{ y: 16, duration: 500, easing: cubicOut }}
    >
      <div class="flex flex-col gap-7 sm:flex-row sm:items-center">
        <div class="flex items-center gap-5 sm:flex-1">
          <Badge id={topD.id} color={topD.color} size={84} />
          <div class="min-w-0">
            <p class="eyebrow" style="color:color-mix(in oklab, {topD.color} 62%, var(--ink))">{headline(top.percent)}</p>
            <h1 class="mt-1.5 font-display text-[2rem] leading-tight font-semibold text-balance sm:text-5xl">{topD.name}</h1>
            <p class="mt-2 text-muted">{topD.tagline}</p>
          </div>
        </div>
        <div class="flex items-center gap-4 sm:flex-col sm:gap-2">
          <Donut percent={top.percent} color={topD.color} size={124} stroke={11} />
        </div>
      </div>

      <p class="mt-7 max-w-2xl text-[1.02rem] leading-relaxed">{topD.summary}</p>
      {#if topD.notice}
        <div class="mt-4 max-w-2xl rounded-xl border px-4 py-3 text-sm {topD.notice.tone === 'caution' ? 'border-amber-500/40 bg-amber-500/10' : 'border-line bg-surface-2/70'}">
          <p class="font-semibold">{topD.notice.title}</p>
          <p class="mt-0.5 text-muted">{topD.notice.text}</p>
        </div>
      {/if}

      {#if close.length}
        <p class="mt-4 text-sm text-muted">
          {t('Neck and neck with')} {#each close as c, i}<a class="font-semibold text-ink underline-offset-4 hover:underline" href={href(lang, `/denominations/${c.id}`)}>{byId[c.id].short} ({c.percent}%)</a>{i < close.length - 1 ? ', ' : ''}{/each}
        </p>
      {/if}

      <div class="mt-7 flex flex-wrap gap-2.5">
        <a href={href(lang, `/denominations/${topD.id}`)} class="btn btn-primary">{t('Explore')}: {topD.short}</a>
        <button class="btn btn-ghost" onclick={share}>{copied ? t('Link copied ✓') : t('Share result')}</button>
        <a href={href(lang, '/quiz')} class="btn btn-ghost">{t('Retake')}</a>
      </div>
    </section>

    <!-- RUNNERS UP -->
    <section class="mt-5 grid gap-4 sm:grid-cols-2">
      {#each ranked.slice(1, 3) as r, i (r.id)}
        {@const d = byId[r.id]}
        <a
          href={href(lang, `/denominations/${d.id}`)}
          class="card group flex items-center gap-4 p-5 transition hover:-translate-y-0.5"
          in:fly={{ y: 16, duration: 500, delay: 120 + i * 80, easing: cubicOut }}
        >
          <Badge id={d.id} color={d.color} size={52} />
          <div class="min-w-0 flex-1">
            <p class="text-xs font-semibold tracking-wider text-muted uppercase">{t('Match #{n}', { n: i + 2 })}</p>
            <p class="truncate font-display text-xl font-semibold">{d.name}</p>
            <p class="truncate text-sm text-muted">{familyName(t, d.family)}</p>
          </div>
          <Donut percent={r.percent} color={d.color} size={64} stroke={6} />
        </a>
      {/each}
    </section>

    <!-- ALL -->
    <section class="mt-14">
      <div class="flex items-end justify-between gap-4">
        <div>
          <p class="eyebrow">{t('Every tradition')}</p>
          <h2 class="mt-1 font-display text-3xl font-semibold">{t('How you compare')}</h2>
        </div>
      </div>

      <div class="card mt-5 divide-y divide-line overflow-hidden">
        {#each visible as r, i (r.id)}
          {@const d = byId[r.id]}
          <div>
            <button
              class="flex w-full items-center gap-3 px-4 py-3.5 text-left transition hover:bg-surface-2 sm:gap-4 sm:px-5"
              onclick={() => (open = open === r.id ? null : r.id)}
              aria-expanded={open === r.id}
            >
              <span class="w-5 text-right text-xs font-semibold tabular-nums text-muted">{i + 1}</span>
              <Badge id={d.id} color={d.color} size={36} />
              <span class="w-32 min-w-0 flex-none sm:w-52">
                <span class="block truncate font-semibold">{d.short}</span>
                <span class="block truncate text-xs text-muted">{familyName(t, d.family)}</span>
              </span>
              <span class="relative h-2.5 flex-1 overflow-hidden rounded-full bg-surface-2">
                <span class="absolute inset-y-0 left-0 rounded-full transition-[width] duration-1000 ease-out" style="width:{r.percent}%;background:{d.color}"></span>
              </span>
              <span class="w-11 text-right font-semibold tabular-nums">{r.percent}%</span>
              <svg viewBox="0 0 24 24" class="size-4 flex-none text-muted transition-transform {open === r.id ? 'rotate-180' : ''}"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>
            </button>

            {#if open === r.id}
              <div class="bg-surface-2/50 px-4 pt-1 pb-5 sm:px-5" transition:slide={{ duration: 220 }}>
                <ul class="grid gap-x-8 gap-y-1 sm:grid-cols-2">
                  {#each r.breakdown as b (b.questionId)}
                    {@const m = mark(b.score)}
                    <li class="flex gap-2.5 border-b border-line/60 py-2.5 text-sm">
                      <span class="mt-0.5 grid size-5 flex-none place-items-center rounded-full text-[11px] font-bold text-white
                        {m === 'agree' ? 'bg-emerald-600' : m === 'partial' ? 'bg-amber-500' : 'bg-rose-600'}">{m === 'agree' ? '✓' : m === 'partial' ? '~' : '✕'}</span>
                      <span class="min-w-0">
                        <span class="block font-medium">{qById[b.questionId].text}</span>
                        <span class="block text-xs text-muted">{t('You')}: {answerLabel(b.questionId, b.answer)} · {d.short}: {stanceLabel(d, b.questionId)}</span>
                      </span>
                    </li>
                  {/each}
                </ul>
                <a href={href(lang, `/denominations/${d.id}`)} class="mt-4 inline-block text-sm font-semibold underline-offset-4 hover:underline">{t('Read more')}: {d.short} →</a>
              </div>
            {/if}
          </div>
        {/each}
      </div>
      {#if ranked.length > 8}
        <div class="mt-3 text-center">
          <button class="text-sm font-semibold text-muted hover:text-ink" onclick={() => (showAll = !showAll)}>
            {showAll ? t('Show fewer') : t('Show all {n}', { n: ranked.length })}
          </button>
        </div>
      {/if}
    </section>

    <!-- AI -->
    {#if !shared}
      <div class="mt-14"><AiReading {answers} {questions} {denominations} {lang} onApply={applySuggestion} /></div>
    {/if}

    <!-- COMPASS -->
    <section class="mt-14 grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <p class="eyebrow">{t('The compass')}</p>
        <h2 class="mt-1 font-display text-3xl font-semibold">{t('Where you stand')}</h2>
        <p class="mt-3 leading-relaxed text-muted">{t('Are sacraments signs or channels of grace? Does salvation rest on God’s choice or your free response?')}</p>
      </div>
      <CompassChart {points} {you} {lang} highlight={ranked.slice(0, 3).map((r) => r.id)} />
    </section>
  </div>
{/if}
