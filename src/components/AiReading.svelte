<script lang="ts">
  import { onMount } from 'svelte';
  import { slide, fade } from 'svelte/transition';
  import type { Answers, Denomination, Notes, Question } from '../data/types';
  import type { AiReading, AiResponse } from '../lib/ai';
  import { loadNotes, saveNote, loadAi, saveAi, inputKey, NOTE_MAX, GENERAL_MAX } from '../lib/storage';
  import Badge from './Badge.svelte';

  let { answers, questions, denominations, onApply }: {
    answers: Answers;
    questions: Question[];
    denominations: Denomination[];
    onApply: (questionId: string, optionId: string) => void;
  } = $props();

  const byId = Object.fromEntries(denominations.map((d) => [d.id, d]));
  const qById = Object.fromEntries(questions.map((q) => [q.id, q]));

  let notes = $state<Notes>({});
  let reading = $state<AiReading | null>(null);
  let model = $state('');
  let at = $state(0);
  let cachedKey = $state('');
  let status = $state<'idle' | 'loading' | 'error'>('idle');
  let error = $state('');
  let elapsed = $state(0);
  let showNotes = $state(false);
  let timers: Record<string, ReturnType<typeof setTimeout>> = {};

  onMount(() => {
    notes = loadNotes();
    const c = loadAi<AiReading>();
    if (c) { reading = c.result; model = c.model; at = c.at; cachedKey = c.key; }
  });

  const currentKey = $derived(inputKey(answers, notes));
  const stale = $derived(!!reading && cachedKey !== currentKey);
  const noteCount = $derived(Object.keys(notes).filter((k) => k !== '_general' && notes[k]?.trim()).length);

  function edit(id: string, text: string) {
    notes[id] = text;
    clearTimeout(timers[id]);
    timers[id] = setTimeout(() => saveNote(id, text), 300);
  }

  async function analyze() {
    status = 'loading';
    error = '';
    elapsed = 0;
    const tick = setInterval(() => (elapsed += 1), 1000);
    const snapshotNotes = Object.fromEntries(Object.entries($state.snapshot(notes)).filter(([, v]) => v?.trim()));
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ answers, notes: snapshotNotes }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message ?? `Request failed (${res.status})`);
      const r = data as AiResponse;
      reading = r.reading;
      model = r.model;
      at = Date.now();
      cachedKey = currentKey;
      saveAi({ key: cachedKey, result: r.reading, model, at });
      status = 'idle';
    } catch (e) {
      error = (e as Error).message || 'Something went wrong.';
      status = 'error';
    } finally {
      clearInterval(tick);
    }
  }

  function optionLabel(qid: string, oid: string) {
    const o = qById[qid]?.options.find((x) => x.id === oid);
    return o?.short ?? o?.label ?? oid;
  }
</script>

<section class="card overflow-hidden">
  <div class="border-b border-line bg-[radial-gradient(120%_120%_at_0%_0%,color-mix(in_oklab,var(--gold)_16%,transparent),transparent_60%)] p-6 sm:p-8">
    <div class="flex flex-wrap items-start justify-between gap-4">
      <div>
        <p class="eyebrow">AI reading</p>
        <h2 class="mt-1 font-display text-3xl font-semibold">In your own words</h2>
      </div>
    </div>

    <label for="general" class="mt-6 flex items-center justify-between text-sm font-semibold">
      What do you believe?
      <span class="text-xs font-normal text-muted tabular-nums">{(notes._general ?? '').length}/{GENERAL_MAX}</span>
    </label>
    <textarea
      id="general"
      rows="5"
      maxlength={GENERAL_MAX}
      value={notes._general ?? ''}
      oninput={(e) => edit('_general', e.currentTarget.value)}
      placeholder="Describe your faith in your own words…"
      class="mt-2 w-full resize-y rounded-xl border border-line bg-surface px-4 py-3 text-[0.97rem] leading-relaxed outline-none placeholder:text-muted/70 focus:border-gold"
    ></textarea>

    <button class="mt-3 text-sm font-semibold text-muted hover:text-ink" onclick={() => (showNotes = !showNotes)} aria-expanded={showNotes}>
      {showNotes ? '▾' : '▸'} Question notes {noteCount ? `(${noteCount})` : ''}
    </button>
    {#if showNotes}
      <div class="mt-3 grid gap-3" transition:slide={{ duration: 200 }}>
        {#each questions as q (q.id)}
          <div>
            <label for="n-{q.id}" class="text-sm font-medium">{q.text}</label>
            <textarea
              id="n-{q.id}"
              rows="2"
              maxlength={NOTE_MAX}
              value={notes[q.id] ?? ''}
              oninput={(e) => edit(q.id, e.currentTarget.value)}
              placeholder="Optional"
              class="mt-1 w-full resize-y rounded-lg border border-line bg-surface px-3 py-2 text-sm outline-none placeholder:text-muted/60 focus:border-gold"
            ></textarea>
          </div>
        {/each}
      </div>
    {/if}

    <div class="mt-5 flex flex-wrap items-center gap-3">
      <button class="btn btn-primary" onclick={analyze} disabled={status === 'loading'}>
        {#if status === 'loading'}
          <span class="size-4 animate-spin rounded-full border-2 border-bg/30 border-t-bg"></span> Reading… {elapsed}s
        {:else}
          {reading ? (stale ? 'Update AI reading' : 'Run again') : 'Get my AI reading'}
        {/if}
      </button>
    </div>
    {#if status === 'error'}
      <p class="mt-3 rounded-xl border border-rose-300/60 bg-rose-500/10 px-4 py-2.5 text-sm" transition:fade>{error}</p>
    {/if}
  </div>

  {#if status === 'loading' && !reading}
    <div class="grid gap-3 p-6 sm:p-8" aria-busy="true">
      {#each [90, 75, 82, 60] as w}<div class="h-3.5 animate-pulse rounded-full bg-surface-2" style="width:{w}%"></div>{/each}
    </div>
  {:else if reading}
    <div class="grid gap-8 p-6 sm:p-8 {status === 'loading' ? 'opacity-50' : ''}" in:fade>
      {#if stale}
        <p class="rounded-xl bg-gold/10 px-4 py-2.5 text-sm">Your answers changed — update to include them.</p>
      {/if}
      <p class="font-display text-xl leading-relaxed">{reading.summary}</p>

      <div>
        <h3 class="text-[11px] font-bold tracking-widest text-muted uppercase">Best fits</h3>
        <ul class="mt-3 grid gap-3 md:grid-cols-3">
          {#each reading.matches as m, i (m.id)}
            {@const d = byId[m.id]}
            <li class="rounded-2xl border border-line p-4">
              <a href="/denominations/{d.id}" class="flex items-center gap-3">
                <Badge id={d.id} color={d.color} size={40} />
                <span class="min-w-0 flex-1">
                  <span class="block truncate font-semibold">{i + 1}. {d.short}</span>
                  <span class="mt-1 block h-1.5 overflow-hidden rounded-full bg-surface-2"><span class="block h-full rounded-full" style="width:{m.fit}%;background:{d.color}"></span></span>
                </span>
                <span class="text-sm font-semibold tabular-nums">{m.fit}%</span>
              </a>
              <p class="mt-3 text-sm leading-relaxed text-muted">{m.why}</p>
            </li>
          {/each}
        </ul>
      </div>

      {#if reading.nuances.length}
        <div>
          <h3 class="text-[11px] font-bold tracking-widest text-muted uppercase">What your words add</h3>
          <ul class="mt-3 grid gap-2.5">
            {#each reading.nuances as n (n.questionId)}
              {@const current = answers[n.questionId]}
              <li class="flex flex-col gap-2 rounded-xl bg-surface-2/60 p-4 sm:flex-row sm:items-center">
                <span class="min-w-0 flex-1">
                  <span class="block text-sm font-semibold">{qById[n.questionId].text}</span>
                  <span class="block text-sm text-muted">{n.reading}</span>
                </span>
                {#if n.suggested && n.suggested !== current}
                  <button class="btn btn-ghost h-9 flex-none px-3.5 text-xs" onclick={() => onApply(n.questionId, n.suggested!)}>
                    Use “{optionLabel(n.questionId, n.suggested)}”
                  </button>
                {:else if n.suggested}
                  <span class="chip flex-none">Applied ✓</span>
                {/if}
              </li>
            {/each}
          </ul>
        </div>
      {/if}

      {#if reading.tensions.length || reading.followups.length}
        <div class="grid gap-6 md:grid-cols-2">
          {#if reading.tensions.length}
            <div>
              <h3 class="text-[11px] font-bold tracking-widest text-muted uppercase">Tensions</h3>
              <ul class="mt-2 grid gap-2 text-[0.95rem]">{#each reading.tensions as t}<li class="flex gap-2"><span class="mt-[9px] size-1.5 flex-none rounded-full bg-gold"></span>{t}</li>{/each}</ul>
            </div>
          {/if}
          {#if reading.followups.length}
            <div>
              <h3 class="text-[11px] font-bold tracking-widest text-muted uppercase">To reflect on</h3>
              <ul class="mt-2 grid gap-2 text-[0.95rem]">{#each reading.followups as t}<li class="flex gap-2"><span class="mt-0.5 text-gold">?</span>{t}</li>{/each}</ul>
            </div>
          {/if}
        </div>
      {/if}

      <p class="border-t border-line pt-4 text-xs text-muted">{model} · AI can be wrong.</p>
    </div>
  {/if}
</section>
