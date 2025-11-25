---
sidebar_label: 'Change Log'
---

# Change Log 

### 1.0.1 (November 2025)

#### 1. Features Introduced
Install Enhancements (__CON-497__)
Customers can now install enhancements and improvements to the RPA Client, enabling easier updates and better maintainability. This feature allows customers to preserve all existing settings on the RPA Agent as well as draft recordings during the upgrade process.

Sharing Variables Between Systems (__CON-577__)
Added functionality to share variables across systems (OpCon and OpCon RPA), improving interoperability and simplifying complex workflows.

#### 2. Bug Fixes
The following issues have been resolved in this release:

- __CON-363__ – RPA Agent fails to start after server reboot with auto-start enabled
- __CON-378__ – RPA incorrectly reports connectivity when OpCon server returns 500 error
- __CON-413__ – Unable to use List – Load or List Create under List Variable
- __CON-449__ – Get OpCon API Token breaks ocadm external password
- __CON-484__ – VisualCron/OpCon RPA memory leak issue
- __CON-489__ – RPA "Store Cookies" setting not respected when off
- __CON-638__ – OutputExpression syntax errors cause job failure
- __CON-652__ – RPA Variable Replacer not initialized with blank tasks correctly
- __CON-655__ – Null pointer exception while importing settings
- __CON-664__ – Incorrect label when viewing user variables

##### 3. Compatibility Note
⚠️ Important:
This release requires Relay version 25.3.0 or higher to function correctly.
Please ensure your environment is updated before deploying the RPA Agent.

##### 4. Additional Notes

**__Ensure the Relay version is 25.3.0 or higher before proceeding.__**

[Refer to the installation instructions](installation-opcon-rpa) for upgrading the pugin.
It's possible Netcom and/or the Rest Api will have a lock on the file, so you may need to stop ServMan briefly.

