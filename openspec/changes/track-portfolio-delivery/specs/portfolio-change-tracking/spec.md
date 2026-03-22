## ADDED Requirements

### Requirement: OpenSpec artifacts for website changes
The repository MUST create an OpenSpec change for each meaningful website update, and each change SHALL include proposal, design/specs, and tasks artifacts before implementation is considered complete.

#### Scenario: Start a new website change
- **WHEN** a new meaningful website update is planned
- **THEN** a new change folder is created under `openspec/changes/<change-name>/`
- **AND** the proposal artifact is completed before implementation tasks begin

### Requirement: Completion and archival traceability
A website change MUST be marked complete only after all tasks are checked and the change is archived in OpenSpec.

#### Scenario: Close a completed change
- **WHEN** all implementation tasks are completed
- **THEN** the change tasks file reflects all items as done
- **AND** the change is archived through the OpenSpec archive workflow
