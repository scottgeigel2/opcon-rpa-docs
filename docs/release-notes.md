---
sidebar_label: "Release Notes"
doc_type: conceptual
---

# OpCon RPA Release Notes

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
