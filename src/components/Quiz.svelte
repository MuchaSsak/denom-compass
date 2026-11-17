<script lang="ts">
  import { onMount } from 'svelte';
  import { fly, fade, slide } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import type { Answers, Denomination, Notes, Question } from '../data/types';
  import { rankAll } from '../lib/scoring';
  import { loadProgress, saveProgress, clearProgress, pushHistory, loadNotes, saveNote, NOTE_MAX } from '../lib/storage';
  import Tip from './Tip.svelte';
  import Popover from './Popover.svelte';

  let { questions, denominations, topics }: {
    questions: Question[];
    denominations: Denomination[];
    topics: Record<string, string>;
  } = $props();

  let answers = $state<Answers>({});
  let notes = $state<Notes>({});
  let index = $state(0);
  let dir = $state(1);
  let picked = $state<string | null>(null);
  let ready = $state(false);
  let finishing = $state(false);
  let noteOpen = $state(false);
  let locked = false;
  let noteTimer: ReturnType<typeof setTimeout> | undefined;

  const total = $derived(questions.length);
  const q = $derived(questions[index]);
  const progress = $derived(Math.round((index / total) * 100));
  const letters = 'ABCDEF';
  const skipped = $derived((picked ?? answers[q.id]) === 'skip');

  onMount(() => {
    notes = loadNotes();
    const p = loadProgress();
    if (p && p.answers && Object.keys(p.answers).length) {
      answers = p.answers;
      index = Math.min(p.index, total - 1);
    }
    noteOpen = !!notes[questions[index].id];
    ready = true;
  });

  function persist() {
    saveProgress({ answers: $state.snapshot(answers), index, updatedAt: Date.now() });
  }

  function go(to: number, d: number) {
    dir = d;
    index = to;
    noteOpen = !!notes[questions[to].id];
    persist();
  }

  function choose(optionId: string) {
    if (locked) return;
    locked = true;
    picked = optionId;
    answers[q.id] = optionId;
    persist();
    setTimeout(() => {
      picked = null;
      next();
      locked = false;
    }, optionId === 'skip' ? 120 : 280);
  }

  function next() {
    if (index < total - 1) go(index + 1, 1);
    else finish();
  }

  function back() {
    if (index === 0 || locked) return;
    go(index - 1, -1);
  }

  function restart() {
    answers = {};
    clearProgress();
    go(0, -1);
  }

  function onNote(e: Event) {
    const text = (e.currentTarget as HTMLTextAreaElement).value;
    notes[q.id] = text;
    clearTimeout(noteTimer);
    const id = q.id;
    noteTimer = setTimeout(() => saveNote(id, text), 300);
  }

  function finish() {
    finishing = true;
    const snapshot = $state.snapshot(answers) as Answers;
    const ranked = rankAll(denominations, questions, snapshot);
    pushHistory({ answers: snapshot, topId: ranked[0].id, topPercent: ranked[0].percent, finishedAt: Date.now() });
    clearProgress();
    setTimeout(() => (window.location.href = '/results'), 900);
  }

  function onKey(e: KeyboardEvent) {
    if (!ready || finishing || e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.target as HTMLElement;
    if (t && (t.tagName === 'TEXTAREA' || t.tagName === 'INPUT' || t.isContentEditable)) return;
    const k = e.key.toLowerCase();
    if (q.kind === 'yesno') {
      if (k === 'y' || k === '1') return choose('yes');
      if (k === 'n' || k === '2') return choose('no');
    } else {
      const n = Number(k) || letters.toLowerCase().indexOf(k) + 1;
      if (n >= 1 && n <= q.options.length) return choose(q.options[n - 1].id);
    }
    if (k === 's' || k === '0' || k === '?') return choose('skip');
    if (k === 'backspace' || k === 'arrowleft') { e.preventDefault(); back(); }
    if (k === 'arrowright' && answers[q.id]) next();
  }
</script>

<svelte:window onkeydown={onKey} />

<section class="mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-xl flex-col pt-5 pb-10 sm:pt-8">
  <!-- top bar -->
  <div class="flex items-center gap-3">
    <button
      class="grid size-10 flex-none place-items-center rounded-full border border-line bg-surface text-ink transition hover:bg-surface-2 disabled:opacity-30"
      onclick={back}
      disabled={index === 0}
      aria-label="Previous question"
    >
      <svg viewBox="0 0 24 24" class="size-5"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
    </button>
    <div class="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-2" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
      <div class="h-full rounded-full bg-gold transition-[width] duration-500 ease-out" style="width:{finishing ? 100 : progress}%"></div>
    </div>
    <span class="text-sm font-semibold tabular-nums text-muted">{Math.min(index + 1, total)}/{total}</span>
    <button
      class="grid size-10 flex-none place-items-center rounded-full border border-line bg-surface text-ink transition hover:bg-surface-2 disabled:opacity-30"
      onclick={next}
      disabled={!answers[q?.id] || finishing}
      aria-label="Next question"
    >
      <svg viewBox="0 0 24 24" class="size-5"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
    </button>
    {#if Object.keys(answers).length && !finishing}
      <button class="grid size-10 flex-none place-items-center rounded-full text-muted transition hover:bg-surface-2 hover:text-ink" onclick={restart} aria-label="Start over" title="Start over">
        <svg viewBox="0 0 24 24" class="size-[18px]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /></svg>
      </button>
    {/if}
  </div>

  {#if !ready}
    <div class="flex-1"></div>
  {:else if finishing}
    <div class="flex flex-1 flex-col items-center justify-center gap-5 text-center" in:fade>
      <div class="relative size-16">
        <div class="absolute inset-0 animate-spin rounded-full border-2 border-line border-t-gold"></div>
      </div>
      <p class="font-display text-2xl">Weighing your answers…</p>
      <p class="text-sm text-muted">Comparing with {denominations.length} traditions</p>
    </div>
  {:else}
    {#key index}
      <div class="flex flex-1 flex-col pt-9 sm:pt-12" in:fly={{ x: 40 * dir, duration: 320, easing: cubicOut, opacity: 0 }}>
        <div class="flex items-start gap-3">
          <div class="min-w-0 flex-1">
            <p class="eyebrow mb-3">{topics[q.topic] ?? q.topic}</p>
            <h1 class="font-display text-[1.85rem] leading-[1.15] font-medium text-balance sm:text-[2.3rem]">{q.text}</h1>
          </div>
          <Popover label="What does this mean?" icon align="right">
            {#if q.hint}<p class="mb-2 text-sm text-muted">{q.hint}</p>{/if}
            <p class="text-[0.95rem] leading-relaxed">{q.explain}</p>
            {#if q.options.some((o) => o.detail)}
              <dl class="mt-4 grid gap-2.5 border-t border-line pt-4 text-sm">
                {#each q.options.filter((o) => o.detail) as o (o.id)}
                  <div><dt class="font-semibold">{o.short ?? o.label}</dt><dd class="text-muted">{o.detail}</dd></div>
                {/each}
              </dl>
            {/if}
            <a href="/doctrines#{q.topic}" class="mt-4 inline-block text-sm font-semibold underline-offset-4 hover:underline">Who believes what →</a>
          </Popover>
        </div>

        <div class="mt-8 sm:mt-10">
          {#if q.kind === 'yesno'}
            <div class="grid grid-cols-2 gap-3">
              {#each q.options as o, i (o.id)}
                {@const sel = (picked ?? answers[q.id]) === o.id}
                <div class="relative">
                  <button
                    class="flex h-28 w-full items-center justify-center rounded-2xl border px-4 text-center transition-all duration-200 sm:h-32
                      {sel ? 'border-ink bg-ink text-bg shadow-lg' : 'border-line bg-surface hover:-translate-y-0.5 hover:border-ink/40 hover:shadow-md'}"
                    onclick={() => choose(o.id)}
                  >
                    <span class="font-display leading-tight {o.label.length > 14 ? 'text-lg sm:text-xl' : 'text-2xl'}">{o.label}</span>
                  </button>
                  {#if o.detail}
                    <span class="absolute top-1.5 right-1.5"><Tip text={o.detail} tone={sel ? 'inverted' : 'default'} align={i === 0 ? 'left' : 'right'} /></span>
                  {/if}
                </div>
              {/each}
            </div>
          {:else}
            <div class="flex flex-col gap-2.5">
              {#each q.options as o, i (o.id)}
                {@const sel = (picked ?? answers[q.id]) === o.id}
                <div class="relative">
                  <button
                    class="flex w-full items-center gap-3.5 rounded-2xl border py-3.5 pl-4 text-left text-[0.98rem] leading-snug transition-all duration-200
                      {o.detail ? 'pr-11' : 'pr-4'}
                      {sel ? 'border-ink bg-ink text-bg shadow-lg' : 'border-line bg-surface hover:border-ink/40 hover:shadow-md'}"
                    onclick={() => choose(o.id)}
                  >
                    <span class="grid size-7 flex-none place-items-center rounded-full text-xs font-bold {sel ? 'bg-bg/15' : 'bg-surface-2 text-muted'}">{letters[i]}</span>
                    <span class="font-medium">{o.label}</span>
                  </button>
                  {#if o.detail}
                    <span class="absolute top-1/2 right-2 -translate-y-1/2"><Tip text={o.detail} tone={sel ? 'inverted' : 'default'} /></span>
                  {/if}
                </div>
              {/each}
            </div>
          {/if}

          <button
            class="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed py-3 text-[0.95rem] font-semibold transition
              {skipped ? 'border-gold bg-gold/10 text-ink' : 'border-line text-muted hover:border-gold hover:text-ink'}"
            onclick={() => choose('skip')}
          >Not sure</button>

          <div class="mt-4">
            {#if !noteOpen}
              <button class="mx-auto flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink" onclick={() => (noteOpen = true)}>
                <svg viewBox="0 0 20 20" class="size-4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 3.5l3 3L7 16H4v-3z" /></svg>
                Add a note
              </button>
            {:else}
              <textarea
                id="note-{q.id}"
                rows="3"
                maxlength={NOTE_MAX}
                value={notes[q.id] ?? ''}
                oninput={onNote}
                aria-label="Your note"
                placeholder="In your own words…"
                class="w-full resize-y rounded-xl border border-line bg-surface px-3.5 py-2.5 text-[0.95rem] leading-relaxed outline-none placeholder:text-muted/70 focus:border-gold"
                transition:slide={{ duration: 180 }}
              ></textarea>
            {/if}
          </div>
        </div>
      </div>
    {/key}
  {/if}
</section>
