---
sidebar_label: 'Troubleshooting'
hide_title: true
---

# Troubleshooting

### RPA Job and Task Status & Results

:::tip Operational Status

![Operational Status](../static/img/operationalstatus.JPG)  

For quick access to a summary of active jobs or recent job failures, navigate to the failed jobs or running jobs view on the server settings tab. 

:::

#### Audit History

![Audit History](../static/img/AuditHistoryDetails.JPG)

### RPA Job Logs  

To access job or task log history: Right click on a job or task and select _**log history**_ from the menu.
- Settings for debug log entries are found in the main menu Manage -> Manage server settings -> Log settings tab.
- Additional debug and log information is available for the server and log function.

### Known Limitations

- The RPA desktop recorder will take full control of the host system in order to execute the workflow.
  - A dedicated machine is preferred for executing the playback of desktop rpa tasks in order to ensure sufficient resources are available and that the recording and playback of tasks do not interfere with the management of other critical operations. 

- RPA desktop tasks can only support recording workflow on the host system which VisualCron is installed.
  - The RPA desktop recorder does not currently support the ability to replay workflow recorded on a remote virtual machine.
