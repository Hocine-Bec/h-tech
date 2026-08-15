---
description: Generate a PR description for backend or frontend
---

Generate the PR description for the requested repository.

Repository selection:
- `/pr backend` → backend repository
- `/pr frontend` → frontend repository
- `/pr` → use the current working repository
- If the requested repo cannot be determined, stop and ask me.

Before writing:
1. Determine the repository and its main branch (`main`, `master`, or remote default).
2. Analyze the current branch against main.
3. Use only changes introduced by the current branch.
4. Ignore unrelated uncommitted, staged, or untracked changes unless they are part of the branch's intended PR.
5. Read the repository's `PR_TEMPLATE.md` if it exists and follow it.
6. Do not invent details, motivation, or behavior not supported by the changes.

Create a concise PR description covering:
- Summary / Changes
- Technical details only when useful
- Testing / Verification only when relevant
- Remove sections that do not apply.

The PR title should follow the repository's existing conventions. If no convention exists, use:

type(context): title

Write the final PR description to the repository root:
- backend → `PR_BACKEND.md`
- frontend → `PR_FRONTEND.md`

Overwrite the file if it already exists.

Do not create or modify any other files.
Do not commit or push anything.

After writing, tell me the repository and output file path.