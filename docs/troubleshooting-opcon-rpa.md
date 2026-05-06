---
sidebar_label: 'Troubleshooting'
title: OpCon RPA troubleshooting
description: "Known limitations of OpCon RPA desktop recording and playback."
tags:
  - Reference
  - Operations Staff
  - RPA
hide_title: true
---

# Troubleshooting

## What is it?

This page documents known limitations of OpCon RPA desktop recording and playback. Use this page to confirm whether a behavior is expected before starting deeper troubleshooting.

## Known limitations

- The RPA desktop recorder takes full control of the host system in order to run the workflow.
  - A dedicated machine is preferred for running the playback of desktop RPA tasks, to ensure sufficient resources are available and that the recording and playback of tasks do not interfere with the management of other critical operations.

- RPA desktop tasks can only support recording workflow on the host system on which the OpCon RPA Tray Client is installed.
  - The RPA desktop recorder does not currently support the ability to replay workflow recorded on a remote virtual machine.

## FAQs

**Can I record an RPA desktop task on one machine and replay it on another virtual machine?**
No. The RPA desktop recorder does not currently support replaying workflow recorded on a remote virtual machine. Recording and playback must occur on the host system on which the OpCon RPA Tray Client is installed.

**Should I use a dedicated machine for OpCon RPA playback?**
A dedicated machine is preferred. The RPA desktop recorder takes full control of the host system, so dedicating a machine helps ensure sufficient resources and prevents the recording and playback from interfering with other critical operations.
