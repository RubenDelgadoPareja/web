## Context

Copilot CLI supports MCP servers through a global config directory (`~/.copilot`) and per-session overrides (`--additional-mcp-config`). The project currently lacks a shared baseline configuration and verification routine, so each session can differ in available tools and security posture.

## Goals / Non-Goals

**Goals:**
- Define a baseline MCP server configuration for Copilot CLI usage in this project.
- Ensure developers can load project-specific MCP servers in a repeatable way.
- Define safe defaults for tool permissions and validation checks.

**Non-Goals:**
- Building custom MCP servers in this change.
- Enforcing organization-wide policy beyond this repository.
- Granting unrestricted permissions by default.

## Decisions

1. Use `~/.copilot/mcp-config.json` as the default MCP declaration file.
- Rationale: It is the native default path consumed by Copilot CLI.
- Alternative considered: Always pass inline JSON via command flags. Rejected due to poor maintainability.

2. Provide optional per-project override via `--additional-mcp-config @<file>`.
- Rationale: Supports repository-specific MCP server definitions without overriding global defaults.
- Alternative considered: Single global config only. Rejected because project needs differ.

3. Keep the default permission model explicit and restrictive.
- Rationale: Prevent accidental over-permissioning while enabling productivity.
- Alternative considered: `--allow-all` by default. Rejected due to security risk.

4. Add a validation checklist that confirms MCP server load before productive use.
- Rationale: Avoids silent misconfiguration and missing tools in interactive sessions.
- Alternative considered: No validation. Rejected because setup failures are otherwise hard to spot.

## Risks / Trade-offs

- User-specific home directory config is not committed in repo -> Mitigation: Document canonical config and optional project-local file to reference.
- Different OS shell environments may affect server command resolution -> Mitigation: Use absolute command paths where possible and validate startup logs.
- Restrictive permissions may require occasional manual approvals -> Mitigation: Add explicit allow rules for trusted workflows instead of broad `allow-all`.
