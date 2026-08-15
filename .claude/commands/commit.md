---
description: Plan and create atomic commits from current branch changes
---

Analyze the current branch against its main branch and the current working tree.

First:
1. Inspect the branch diff and all current staged, unstaged, and relevant untracked changes.
2. Group the changes into logical, atomic commits by context. Each commit should represent one coherent change and include related tests when appropriate.
3. Do not include changes already committed to the branch. Do not include unrelated working-tree changes.

For each proposed commit, output:

COMMIT 1
Files:
- path
- path

type(context): title

- bullet point
- bullet point
- bullet point

Repeat for every commit.

Commit messages must describe only what the actual changes support. Use Conventional Commit types (`feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `ci`, etc.).

Then print:
`Total commits: N`
`Approve these commits? (yes/no)`

STOP. Do not stage or commit anything until I explicitly approve.

After approval:
- Re-check the changes haven't materially changed.
- Stage only the files/hunks belonging to each approved commit.
- Create the commits in the proposed order using the exact approved messages.
- Never use `git add .` or `git add -A`.
- Do not co-author the commits.
- Never amend, reset, rebase, squash, or push.
- If a commit fails, stop immediately.

Finally show the commits created and `git status --short`.