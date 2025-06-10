---
sidebar_label: 'Troubleshooting'
hide_title: true
---

# Troubleshooting

### Known Limitations

- The RPA desktop recorder will take full control of the host system in order to execute the workflow.
  - A dedicated machine is preferred for executing the playback of desktop rpa tasks in order to ensure sufficient resources are available and that the recording and playback of tasks do not interfere with the management of other critical operations. 

- RPA desktop tasks can only support recording workflow on the host system which the OpCon RPA Tray Client is installed.
  - The RPA desktop recorder does not currently support the ability to replay workflow recorded on a remote virtual machine.
