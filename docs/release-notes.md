---
sidebar_label: 'Release Notes'
title: OpCon RPA release notes
description: "Version history and change details for OpCon RPA, including new features, improvements, and bug fixes."
tags:
  - Reference
  - System Administrator
  - RPA
---

# OpCon RPA release notes

## 1.0

### 1.0.2

2026 February

### What's new

:eight_spoked_asterisk: **CON-64**: Desktop Session switching and Execution Context. Single-user Windows systems can switch between locked user sessions, and multi-user Windows server systems can direct tasks to the appropriate user session.

### Bug fixes

:white_check_mark: **CON-921**: Endpoint `/api/version` no longer requires a session token.

:white_check_mark: **CON-893**: Fixed an issue with the variable resolver when using List Variables like `{USERVAR(myList)}`. When the first row was specified as headers, the headers were printed as a row.

:white_check_mark: **CON-838**: Corrected links for help pages.

:white_check_mark: **CON-715**: Removed the start/stop service button from the home screen. Use `services.msc` instead.

:white_check_mark: **CON-650**: Fixed an issue where Certificate Manager did not always display available certificates correctly, and client certificates were not passed to the TaskRunner when `/api/taskProcess/startNew` was called.

### Why this matters

Desktop Session switching and Execution Context expand OpCon RPA coverage to environments where multiple user sessions must be automated on the same machine. The bug fixes resolve session-token, variable-resolution, and certificate-handling issues that previously caused job failures or misconfiguration.

### 1.0.1

2025 November

### What's new

:eight_spoked_asterisk: **CON-497**: Install Enhancements. Customers can now install enhancements and improvements to the RPA Client, enabling easier updates and better maintainability. This feature preserves all existing settings on the RPA Agent and draft recordings during the upgrade process.

:eight_spoked_asterisk: **CON-577**: Sharing Variables Between Systems. Variables can be shared across systems (OpCon and OpCon RPA), improving interoperability and simplifying complex workflows.

### Bug fixes

:white_check_mark: **CON-363**: Fixed an issue where the RPA Agent failed to start after a server reboot with auto-start enabled.

:white_check_mark: **CON-378**: Fixed an issue where RPA incorrectly reported connectivity when the OpCon server returned a 500 error.

:white_check_mark: **CON-413**: Fixed an issue that prevented the use of List – Load or List Create under List Variable.

:white_check_mark: **CON-449**: Fixed an issue where Get OpCon API Token broke `ocadm` external password handling.

:white_check_mark: **CON-484**: Fixed a VisualCron / OpCon RPA memory leak.

:white_check_mark: **CON-489**: Fixed an issue where the RPA "Store Cookies" setting was not respected when turned off.

:white_check_mark: **CON-638**: Fixed an issue where OutputExpression syntax errors caused job failure.

:white_check_mark: **CON-652**: Fixed an issue where the RPA Variable Replacer was not initialized correctly with blank tasks.

:white_check_mark: **CON-655**: Fixed a null pointer exception that occurred while importing settings.

:white_check_mark: **CON-664**: Fixed an incorrect label when viewing user variables.

### Why this matters

The 1.0.1 release introduces in-place upgrades that preserve agent settings and draft recordings, and adds variable sharing between OpCon and OpCon RPA so workflows can pass data across systems. Bug fixes in this release resolve startup, connectivity, variable-handling, certificate, and memory issues that previously affected reliability of the RPA Agent.
