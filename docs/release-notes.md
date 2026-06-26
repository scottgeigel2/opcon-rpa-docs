---
sidebar_label: "Release Notes"
doc_type: conceptual
---

# OpCon RPA Release Notes

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
