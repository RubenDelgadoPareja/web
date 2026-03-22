## ADDED Requirements

### Requirement: MCP startup validation
The workflow MUST include validation steps that confirm MCP servers are loaded and usable before relying on MCP tools in implementation sessions.

#### Scenario: Validate MCP server availability
- **WHEN** a developer completes Copilot CLI MCP setup
- **THEN** they run a validation command or startup check
- **AND** confirm configured MCP server names and tools are visible in session diagnostics or logs

### Requirement: Safe permission defaults
Copilot CLI MCP sessions SHALL use explicit allow/deny tool and URL controls by default.

#### Scenario: Launch a secure MCP-enabled session
- **WHEN** a developer starts Copilot CLI with MCP enabled
- **THEN** permissions are controlled through explicit allow/deny settings
- **AND** unrestricted modes (`--allow-all` or `--yolo`) are avoided unless intentionally required
