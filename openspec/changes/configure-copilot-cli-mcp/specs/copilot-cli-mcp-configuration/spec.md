## ADDED Requirements

### Requirement: Baseline MCP configuration source
The Copilot CLI setup SHALL define a baseline MCP configuration source that is loaded from the default Copilot config directory or an explicit override file.

#### Scenario: Start Copilot CLI with baseline MCP configuration
- **WHEN** a developer starts Copilot CLI for this project
- **THEN** Copilot CLI loads MCP server definitions from `~/.copilot/mcp-config.json` or a provided additional config file
- **AND** the available MCP tools reflect the configured server list

### Requirement: Project-specific MCP override
The setup MUST support project-specific MCP additions without replacing the baseline global MCP configuration.

#### Scenario: Add project MCP server for one session
- **WHEN** a developer launches Copilot CLI with `--additional-mcp-config @<project-file>`
- **THEN** the project MCP server definitions are merged with the baseline configuration
- **AND** baseline MCP servers remain available unless explicitly disabled
