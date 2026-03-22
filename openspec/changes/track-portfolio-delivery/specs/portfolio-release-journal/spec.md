## ADDED Requirements

### Requirement: Release journal entry for archived changes
The project SHALL maintain a release journal entry for each archived OpenSpec website change that summarizes the purpose and delivered scope.

#### Scenario: Record a completed website update
- **WHEN** a website change is archived
- **THEN** a release journal entry is added with the change name, date, and summary
- **AND** the entry references the archived OpenSpec change identifier

### Requirement: Journal consistency
Each release journal entry MUST use a consistent structure so changes are easy to review over time.

#### Scenario: Write a new journal entry
- **WHEN** a release journal entry is created
- **THEN** it includes a standard set of fields (change name, date, summary, links)
- **AND** it follows the same format used by previous entries
