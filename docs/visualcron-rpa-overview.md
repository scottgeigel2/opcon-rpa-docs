---
sidebar_label: 'VisualCron RPA Overview'
title: VisualCron RPA section overview
description: "Section overview of VisualCron RPA — what the product does, who it is for, and a guide to the pages in this section."
tags:
  - Conceptual
  - Automation Engineer
  - RPA
---

# VisualCron RPA

## What is it?

VisualCron RPA continues automation through the **last mile** — automating desktop, web, or hybrid processes that pause for human interaction. VisualCron RPA is designed for banks, credit unions, and insurance companies for use in tandem with OpCon, extending OpCon's functionality and usefulness.

This section describes how to install, configure, navigate, and operate VisualCron RPA, and how to orchestrate VisualCron RPA jobs from OpCon.

## In this section

| Page | What it covers |
|------|----------------|
| [Introduction to VisualCron RPA](./visualcron-rpa.md) | High-level introduction to RPA and VisualCron RPA. |
| [System Requirements](./system-requirements-visualcron-rpa.md) | Operating system, processor, memory, and disk requirements for the VisualCron RPA Server, Client, and combined installations. |
| [Acquiring a License](./acquiring-a-license-visualcron-rpa.md) | How to obtain a VisualCron RPA license. |
| [Installation - VisualCron Server & Client](./installation-visualcron-rpa.md) | How to install VisualCron Server and Client and activate the license. |
| [Configuration Overview](./overview-visualcron-rpa.md) | Conceptual overview of VisualCron RPA objects (Job, Task, Trigger, Condition, Credential, Connection) and how they map to OpCon. |
| [General Navigation & Management](./navigation-visualcron-rpa.md) | How to access the VisualCron Client, manage server configuration, and turn on the Web REST API. |
| [Orchestration with OpCon](./orchestration-with-opcon-visualcron-rpa.md) | How to start VisualCron RPA jobs from OpCon by frequency, dependency, or Self Service. |
| [RPA Job Configuration with VisualCron](./rpa-job-config-with-visualcron.md) | How to set up credentials and connections, create RPA jobs, configure web and desktop tasks, and add conditions or triggers. |
| [Reporting and Metrics](./reporting-and-metrics-visualcron-rpa.md) | Where to find RPA job history and ROI reporting. |
| [Troubleshooting](./troubleshooting-visualcron-rpa.md) | Job and task status, audit history, log access, and known limitations. |

## Where to start

- **First-time install:** Start with [System Requirements](./system-requirements-visualcron-rpa.md), then [Acquiring a License](./acquiring-a-license-visualcron-rpa.md), then [Installation - VisualCron Server & Client](./installation-visualcron-rpa.md).
- **Understanding VisualCron concepts:** Read [Introduction to VisualCron RPA](./visualcron-rpa.md) and [Configuration Overview](./overview-visualcron-rpa.md).
- **Building VisualCron RPA jobs:** Read [RPA Job Configuration with VisualCron](./rpa-job-config-with-visualcron.md).
- **Connecting RPA jobs to OpCon schedules:** Read [Orchestration with OpCon](./orchestration-with-opcon-visualcron-rpa.md).
- **Operating in production:** Read [Reporting and Metrics](./reporting-and-metrics-visualcron-rpa.md) and [Troubleshooting](./troubleshooting-visualcron-rpa.md).

## FAQs

**What does VisualCron RPA automate that OpCon alone cannot?**
VisualCron RPA automates interactions with applications that lack APIs or scheduled-job interfaces — typically desktop or web applications that require keyboard and mouse input.

**How does VisualCron RPA relate to OpCon RPA?**
Both products provide RPA capabilities. OpCon RPA is the Continuous-supported product. This section documents VisualCron RPA for customers using that integration.

**Do VisualCron Robot Tasks require Netcom Relay over VPN?**
No. Robot Tasks in VisualCron work over VPN without Netcom Relay. Netcom Relay applies to OpCon RPA cloud installations.

## Glossary

| Term | Definition |
|------|-----------|
| RPA | Robotic Process Automation. Software that records and plays back human interactions with applications that lack programmatic interfaces. |
| Job (VisualCron) | A grouping of one or more Tasks in VisualCron. Equivalent to an OpCon Schedule. |
| Task (VisualCron) | A specific process to run in VisualCron. Equivalent to an OpCon Job. |
| Trigger | A time- or event-based condition that fires a VisualCron Job to run. |
| Condition | A check evaluated before a VisualCron Job or Task runs. |
| Credential | A stored set of authentication details used by VisualCron. |
| Connection | A configured connection definition that VisualCron uses to reach an external system. |
