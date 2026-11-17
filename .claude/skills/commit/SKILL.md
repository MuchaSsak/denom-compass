---
name: commit
description: Commit finished coherent work as Claude with a conventional subject and a handoff body (why, what changed, decisions, verified, left to do, next step) that the next Claude session reads in git log to pick up where this one stopped.
---

# Commit

One local commit of finished, coherent work. **The message is the handoff note.** The next session
(a later edit job, a new chat, you after a compaction) has never seen this conversation; it starts
from `git log`. Write the body from what you already know about this work; do not re-review the diff
to write it.

## 1. Stage

- **Headless build in a project container** (you are the only writer): `git add -A`.
- **A shared working tree** (a developer's machine, the factory repo, where other sessions may be
  editing): stage only the files this work changed, by explicit path, never `.` or a folder. Then
  `git diff --cached --name-only` and unstage anything that is not yours.

Nothing staged: say "nothing to commit" and stop.

## 2. Message

Subject: `type(scope): outcome`, at most 72 characters, saying what is now true ("buy page shows
the pay button only with ?stripetest=true"), not "update files". Types: feat, fix, refactor, chore,
docs, test, style, perf, ci, build, revert.

Body: always. Plain text wrapped at ~80 columns, `-` bullets, sections in this order, any empty
section left out. A one-line fix needs 2-3 lines; the end of a long session or a big feature can
run 40-80 lines, grouped by area (one sub-list per app or part).

```
Why: the ask or the failure in one or two lines (quote the user briefly when they asked for it).

What changed:
- the behaviour now, per area, with the key files (a reader greps them next).

Decisions:
- a choice the next session might undo or re-argue, and why (what was rejected).

Verified:
- the checks you actually ran and their real results ("tests 35/35", "typecheck clean",
  "Playwright 320/390/1440, no overflow").

Not verified / left to do:
- untested paths, stubs, temporary switches, known bugs, blocked steps: each with its file or switch.

Next:
- the concrete next step(s) for whoever picks this up; actions only a human can do (env vars,
  deploys, pushes, dashboard clicks).

Context: the docs or wiki pages to read first.
```

Then any trailers the repo or your instructions require (`Wiki: n/a`, `Legal: n/a`,
`Co-Authored-By: ...`), after one blank line.

Rules: never call something verified you did not run, and put failures and skips under "Not verified".
Never put secrets, tokens, env values, personal data or long logs in a message: history is permanent
and gets pushed.

## 3. Commit

As Claude, with the message from a file outside the repo or a quoted heredoc (keeps quotes and
backslashes intact):

```bash
git commit --author="Claude <noreply@anthropic.com>" -F - <<'MSG'
...
MSG
```

**NEVER** pass `--no-verify`. If a hook blocks the commit (a secret, a real `.env` file, a `*.TODO`
stub, an unresolved `TODO_` placeholder, a docs-drift check), report the finding and stop: fixing it
belongs to the calling workflow, not this skill.

**Do NOT push.** In a build the runner owns the tokenized push (`/runner/publish.sh`); elsewhere the
developer pushes.
