## Context

The portfolio repository currently captures code changes in Git, but it does not enforce a consistent path from idea to implementation and closure. OpenSpec is installed, yet there is no repository-level convention describing when to create changes, what artifacts are mandatory, and how to archive completed work for historical reference.

## Goals / Non-Goals

**Goals:**
- Define a repeatable OpenSpec workflow for website-level changes.
- Ensure each change has a complete trail: proposal, design/specs, tasks, completion, archive.
- Keep process overhead low so it is realistic for day-to-day solo development.
- Add a release journal convention for quick retrospective visibility.

**Non-Goals:**
- Replacing Git history or conventional commits.
- Introducing CI automation in this change.
- Changing runtime behavior of the Astro website.

## Decisions

1. Use one OpenSpec change per meaningful website update.
- Rationale: This keeps scope manageable and improves traceability.
- Alternative considered: Weekly grouped changes. Rejected because it mixes unrelated scopes.

2. Require proposal before implementation and tasks completion before archive.
- Rationale: Enforces planning and explicit closure.
- Alternative considered: Optional proposal for small changes. Rejected for consistency.

3. Define release-journal entries linked to archived OpenSpec changes.
- Rationale: Provides an easy, human-readable change log beyond raw commits.
- Alternative considered: Only rely on commit messages. Rejected due to lower discoverability.

4. Keep the workflow manual initially.
- Rationale: Avoids unnecessary tooling complexity while the process is validated.
- Alternative considered: Immediate CI checks for OpenSpec status. Deferred until process matures.

## Risks / Trade-offs

- Process friction for very small edits -> Mitigation: Apply workflow to meaningful changes, not typo-only fixes.
- Incomplete artifacts over time -> Mitigation: Define done criteria that includes tasks completion and archive.
- Drift between proposal and implementation -> Mitigation: Require tasks updates during implementation and brief closeout review before archive.
