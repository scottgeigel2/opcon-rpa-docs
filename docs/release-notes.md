---
sidebar_label: "Release Notes"
doc_type: conceptual
---

# OpCon RPA Release Notes

## Summer 26

### 1.2.0

**NOTE**: This release changes where some existing tasks run. After the update, Web Macro tasks, Scan Document tasks, and Robot tasks whose execution context is **Background** run on a headless host under the account the RPA Agent service runs as, instead of in the signed-in user's desktop session. See [Background Execution](#background-execution) for who is affected and how to keep the previous behavior.

2026 (release date TBD)

# OpCon RPA Release 1.2.0 – What's New

## Summary

Release 1.2.0 moves background-capable tasks — Web Macro, Scan Document, and Robot tasks marked Background — to a new headless host that runs them without a signed-in desktop session, fixes recording and playback of browser tab actions in web automation tasks, adds wildcard matching to file and folder filters, removes the third-party sign-in component for locked sessions, resolves designer and Tray Client issues, and updates the Magick.NET, CoreWCF, and SQLite components to secure versions.

## Background Execution

### What Changes for Existing Tasks

:eight_spoked_asterisk: **CON-1527: Headless Execution for Background-Capable Tasks** After the update, the following tasks run on a headless host under the account the RPA Agent service runs as, even when a user is signed in and the Tray Client is connected:

- All Web Macro tasks
- All Scan Document tasks
- Robot tasks whose execution context is **Background**

These tasks no longer run in the signed-in user's desktop session, so they no longer see that user's browser profile, saved sign-ins, proxy settings, or mapped drives. Robot tasks whose execution context is **Foreground** are not affected and continue to run in the interactive session.

To keep the previous behavior for all tasks, set `"RouteBackgroundToHeadless": false` in the RPA Agent's `appsettings.json` and restart the RPA Agent service. The setting applies to the entire Agent — there is no per-task override.

### Requirements

- A task with no execution user runs as the account the RPA Agent service runs as.
- A task whose execution user differs from the service account is signed in with a batch logon. The service account must hold the **Replace a process level token** (`SeAssignPrimaryTokenPrivilege`) and **Adjust memory quotas for a process** (`SeIncreaseQuotaPrivilege`) privileges for this to succeed.
- The execution user cannot be LocalSystem or SYSTEM. Such a task fails with the message `Refusing to run headless task as '<user>': LocalSystem/SYSTEM is not allowed as a run identity.`

### Troubleshooting

Headless task logs are written to `%ProgramData%\RPA.HeadlessRunner\logs` on the Agent machine; they do not appear in the Agent's own log. A background-capable task that has no execution user fails immediately with `Background task has no execution user for the interactive path and RouteBackgroundToHeadless is disabled — enable the setting or configure an execution user` when `RouteBackgroundToHeadless` is `false` — turn the setting back on or assign an execution user to the task.

### Why This Matters

Web Macro, Scan Document, and Background Robot tasks run without a signed-in desktop session, and their results no longer depend on which user happens to be signed in. Tasks that relied on the signed-in user's browser profile or network context need the opt-out setting or an explicit execution user.

## Web Automation

### What's New

:white_check_mark: **CON-880: Browser Tab Handling in Web Recordings** Fixed recording and playback of browser tab actions in web automation tasks. Recording now captures closing a tab, including when a web page closes its own window. Playback now opens a new tab for pages that open in a new window, switches between tabs, and closes tabs as recorded — both in the designer and when the task runs unattended. Recordings created with earlier versions continue to play back correctly.

:white_check_mark: **CON-1694: Browser Password-Save Prompt Disabled** The embedded browser no longer shows a save-password prompt during recording or playback.

### Why This Matters

Web automation tasks that open, switch, or close browser tabs — including pop-up windows — now replay reliably instead of stalling or acting on the wrong tab, and unattended runs are not interrupted by browser prompts.

## Robot Designer & Tasks

### What's New

:white_check_mark: **CON-1878: Wildcard Matching in File and Folder Filters** Wildcard patterns (`*` and `?`) in file and folder filters now match correctly.

:white_check_mark: **CON-1833: Scan Document File Filter Fix** Fixed an error when opening the Scan Document action editor and an issue where its file filter settings were not saved.

:white_check_mark: **CON-1714: Stop Shortcut Fix** Fixed the **Ctrl+Alt+S** stop shortcut not stopping a running task in some Robot designer flows.

:white_check_mark: **CON-1742: Duplicate Credential Entry After Add** Fixed a duplicate placeholder entry appearing in the credentials list after adding a credential.

### Why This Matters

File and folder filters behave as configured, the Scan Document action can be edited and saved without errors, a running task can always be stopped from the keyboard, and the credentials list stays accurate.

## RPA Agent & Tray Client

### What's New

:white_check_mark: **CON-1942: Agent Startup with a Large Task Database** Fixed an issue where the RPA Agent could fail to start when the local task database grew large.

:white_check_mark: **CON-1701: Built-In Locked-Session Sign-In** Running jobs in a locked session no longer relies on a third-party sign-in component. The capability is now built into OpCon RPA.

### Why This Matters

The Agent starts reliably regardless of how much task history has accumulated, and locked-session support no longer depends on an external component.

## Platform & Dependencies

### What's New

:white_check_mark: **CON-1835, CON-1860: Magick.NET Upgrade** Upgraded Magick.NET to 14.14.0 to resolve vulnerable dependencies.

:white_check_mark: **CON-1853: CoreWCF Upgrade** Upgraded CoreWCF to 1.9.1 to resolve a vulnerable dependency.

:white_check_mark: **CON-1836: SQLite Component Update** Updated the SQLite database component to remove a vulnerable dependency.

### Why This Matters

The image-processing, service-communication, and database components are current, keeping OpCon RPA aligned with supported and secure component versions.

## Spring 26

### 1.1.0

**NOTE**: This release requires an ACS Plugin DLL update. The task storage model also changed — tasks are now stored locally on the RPA Agent instead of in the OpCon Script Repository, and an OpCon user is no longer required. See [Update - OpCon RPA Agent and ACS plugin](./update-opcon-rpa.md) for the required post-update tasks.

2026 April

# OpCon RPA Release 1.1.0 – What's New

## Summary

Release 1.1.0 lets OpCon RPA run independently of OpCon by moving task storage to a local database, adds Copy and Delete actions for workflows on the Draft and Archive grids, updates the ACS plugin, upgrades VisualCron to 12.3.1, and resolves Tray Client CPU, database-compatibility, error-reporting, locked-session, and OpCon task-start issues.

## OpCon-Independent Operation

### What's New

:eight_spoked_asterisk: **CON-459: OpCon-Independent Operation** OpCon RPA can be deployed and run without OpCon. Task storage moved to a local database, removing the dependency on the OpCon API.

### Why This Matters

OpCon RPA can be adopted in environments that do not run OpCon, broadening where robot automation can be deployed.

## Workflow Management

### What's New

:eight_spoked_asterisk: **CON-69: Copy and Delete Existing Workflows** Added Copy and Delete actions on the Draft and Archive grids. Copy supports copying all versions, copying a specific version as Version 1, or copying a specific version as a draft. Per-row Delete and Run buttons are disabled while a task is running, to prevent accidental actions on a running task. Task version numbers are incremented automatically on save.

### Why This Matters

You can duplicate and remove workflows directly from the grids, and automatic version numbering keeps task history consistent.

## Platform & Dependencies

### What's New

:eight_spoked_asterisk: **CON-1039: ACS Plugin Update** Updated the ACS plugin.

:eight_spoked_asterisk: **CON-1044: VisualCron Upgrade** Upgraded VisualCron from 12.2.x to 12.3.1.

:white_check_mark: **CON-1355: Magick.NET Dependency Upgrade** Upgraded Magick.NET to 14.13.0 to resolve a vulnerable dependency.

### Why This Matters

The ACS plugin and VisualCron engine are current, and a vulnerable image-processing dependency is removed, keeping OpCon RPA aligned with supported and secure component versions.

## RPA Agent & Tray Client

### What's New

:white_check_mark: **CON-1497: Tray Client High CPU Fix** Fixed a Tray Client busy-loop that caused high CPU usage when polling the Agent for heartbeat status with no active tasks.

:white_check_mark: **CON-1493: Database Format Compatibility Check** The Agent now detects a newer (v1.2.0) database format at startup and fails fast rather than corrupting data on a downgrade.

:white_check_mark: **CON-716: Duplicate Tray Client Instance Prevention** Prevented starting duplicate instances of the RPA Tray Client.

:white_check_mark: **CON-1539: Single Tray Client Instance Per User Session** Limited the Tray Client to a single instance per user session.

:white_check_mark: **CON-1209: Script Endpoint Error Message Propagation** The normalized error message is now shown in the UI when the script endpoint returns an error.

:white_check_mark: **CON-1541: Intermittent Task Start Failures from OpCon** Fixed an issue where reconnecting a Windows session left a stale Tray Client registration on the Agent, causing OpCon RPA jobs to fail immediately with an HTTP 400 "RPA Client ... was not found" error.

:white_check_mark: **CON-1677: Run Jobs in a Locked Session** Fixed an issue in some environments where OpCon RPA jobs ran only while the user session was unlocked. The component needed to sign in to a locked session is now included, so jobs run when the session is locked. An active user session on the Agent is still required.

:white_check_mark: **CON-1708: Random Error Dialog While Editing a Task** Fixed an issue where an error dialog could appear while editing a task.

### Why This Matters

The Tray Client no longer consumes excess CPU when idle or runs as duplicate instances, the Agent protects against data corruption on downgrade, script endpoint errors surface clearly in the UI, RPA jobs run when the user session is locked in affected environments, and editing a task no longer raises spurious error dialogs.

## Winter 26

### 1.0.2

**NOTE**: This release does not require an ACS Plugin DLL update. Post-update tasks are required for existing Network Credentials and Robot tasks — see [Update - OpCon RPA Agent and ACS plugin](./update-opcon-rpa.md).

2026 February

# OpCon RPA Release 1.0.2 – What's New

## Summary

Release 1.0.2 introduces Desktop Session switching and Execution Context for multi-user Windows environments, fixes Network Credential password persistence and List Variable header handling, and resolves a range of Tray Client and Certificate Manager issues.

## Execution Context & Session Management

### What's New

:eight_spoked_asterisk: **CON-64: Desktop Session Switching and Execution Context** Single-user Windows systems can now switch between locked user sessions, and multi-user Windows server systems can direct tasks to the appropriate user session.

### Why This Matters

OpCon RPA coverage extends to environments where multiple user sessions must be automated on the same machine, closing a gap between OpCon RPA and standard multi-user server deployments.

## RPA Agent & Tray Client

### What's New

:white_check_mark: **CON-921: /api/version Session Token Requirement Removed** Endpoint `/api/version` no longer requires a session token.

:white_check_mark: **CON-715: Start/Stop Service Button Removed from Home Screen** Removed the start/stop service button from the home screen. Use `services.msc` instead.

:white_check_mark: **CON-650: Certificate Manager Display and Client Certificate Pass-Through** Fixed an issue where Certificate Manager did not always display available certificates correctly, and client certificates were not passed to the TaskRunner when `/api/taskProcess/startNew` was called.

### Why This Matters

The Tray Client and RPA Agent align more closely with standard Windows service management practices, and certificate handling for TaskRunner calls is reliable.

## Variables & Help

### What's New

:white_check_mark: **CON-893: List Variable Header Row Resolution Fix** Fixed an issue with the variable resolver when using List Variables like `{USERVAR(myList)}`. When the first row was specified as headers, the headers were printed as a row.

:white_check_mark: **CON-838: Help Page Link Corrections** Corrected links for help pages.

### Why This Matters

List Variable header handling and in-product help links behave as documented.

## Fall 25

### 1.0.1

**NOTE**: This release requires an ACS Plugin DLL update to receive a bug fix where Agent status showed as available even if the Tray Client was not actually running. See [Update - OpCon RPA Agent and ACS plugin](./update-opcon-rpa.md).

2025 November

# OpCon RPA Release 1.0.1 – What's New

## Summary

Release 1.0.1 introduces in-place upgrades that preserve agent settings and draft recordings, adds variable sharing between OpCon and OpCon RPA, and resolves startup, connectivity, variable, certificate, and memory issues that affected day-to-day reliability of the RPA Agent.

## Install & Upgrade

### What's New

:eight_spoked_asterisk: **CON-497: Install Enhancements** Customers can install enhancements and improvements to the RPA Client, enabling easier updates and better maintainability. The feature preserves existing settings on the RPA Agent and draft recordings during the upgrade process.

### Why This Matters

In-place upgrades remove a recurring source of friction during RPA Client updates and protect work in progress.

## Variables & Interoperability

### What's New

:eight_spoked_asterisk: **CON-577: Sharing Variables Between Systems** Variables can be shared across systems (OpCon and OpCon RPA), improving interoperability and simplifying complex workflows.

:white_check_mark: **CON-413: List – Load and List Create Under List Variable** Fixed an issue that prevented the use of List – Load or List Create under List Variable.

:white_check_mark: **CON-638: OutputExpression Syntax Error Job Failure Fix** Fixed an issue where OutputExpression syntax errors caused job failure.

:white_check_mark: **CON-652: Variable Replacer Initialization with Blank Tasks** Fixed an issue where the RPA Variable Replacer was not initialized correctly with blank tasks.

:white_check_mark: **CON-664: User Variable Label Correction** Fixed an incorrect label when viewing user variables.

### Why This Matters

Workflows can pass data across OpCon and OpCon RPA without external workarounds, and variable resolution, list handling, and output expression evaluation are reliable across the supported feature set.

## RPA Agent

### What's New

:white_check_mark: **CON-363: Agent Start After Server Reboot with Auto-Start Enabled** Fixed an issue where the RPA Agent failed to start after a server reboot with auto-start enabled.

:white_check_mark: **CON-378: Connectivity Reporting on OpCon Server 500 Errors** Fixed an issue where RPA incorrectly reported connectivity when the OpCon server returned a 500 error.

:white_check_mark: **CON-484: Memory Leak Fix** Fixed a VisualCron / OpCon RPA memory leak.

:white_check_mark: **CON-489: Store Cookies Setting Respected When Off** Fixed an issue where the RPA "Store Cookies" setting was not respected when turned off.

### Why This Matters

Startup, connectivity, and memory regressions are resolved, increasing day-to-day reliability of the RPA Agent.

## Settings & API Token

### What's New

:white_check_mark: **CON-449: Get OpCon API Token and ocadm External Password** Fixed an issue where Get OpCon API Token broke `ocadm` external password handling.

:white_check_mark: **CON-655: Null Pointer Exception on Settings Import** Fixed a null pointer exception that occurred while importing settings.

### Why This Matters

Settings import and the OpCon API Token handshake complete without exceptions or side effects on external passwords.
