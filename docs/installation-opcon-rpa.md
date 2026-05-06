---
sidebar_label: 'Installation - OpCon RPA Agent and Netcom Relay'
title: Install OpCon RPA Agent and Netcom Relay
description: "Step-by-step installation of OpCon RPA, including Solution Manager setup, Netcom Relay (for cloud), the ACS plugin, the RPA Agent, and the connection between OpCon and the RPA Agent."
tags:
  - Procedural
  - System Administrator
  - RPA
hide_title: true
---

# Installation - OpCon RPA

## What is it?

This page walks you through installing OpCon RPA on a Windows system and connecting it to OpCon. The procedure has six steps:

1. Create the RPA user in Solution Manager.
2. Add an RPA agent in Solution Manager.
3. Install Netcom Relay (cloud installations only).
4. Copy the ACS Plugin DLL into the OpCon plugins directory.
5. Run the RPA Agent installer.
6. Connect the RPA Agent to OpCon.

During the procedure, you will switch between two interfaces:

- The OpCon **Solution Manager** web interface.
- The **RPA Tray Client** that opens after installation on the Windows host.

## Before you begin

Have these three files ready:

| File | Where to get it | What it is for |
|------|-----------------|----------------|
| `SMANetcomRelay.exe` | Provided by your OpCon representative | Cloud installations only — installs Netcom Relay |
| `sma.acs.OpConRPA.dll` | [OpCon Web Installer (OWI)](https://github.com/smatechnologies/opcon-web-installer/releases) — **Integrations** section | The ACS plugin that lets OpCon communicate with the RPA Agent |
| `RPAAgent_x.y.z.msi` | [OpCon Web Installer (OWI)](https://github.com/smatechnologies/opcon-web-installer/releases) — **Agents** section | The RPA Agent installer (`x.y.z` is the version number) |

You also need:

- A Solution Manager user account that can add users and grant the `Role_ocadm` role.
- Local administrator rights on the Windows system where the RPA Agent will run.

:::note On-premises vs. cloud
Netcom Relay is required only when integrating RPA with a cloud instance of OpCon CORE Automate / Solution Manager. On-premises installations skip Step 3.
:::

## Step 1 — Create the RPA user in Solution Manager

To create the user the RPA Agent uses to communicate with OpCon, complete the following steps:

1. Log in to Solution Manager with a user who can add users and grant the `Role_ocadm` role.
2. Go to **Library** > **Access Management** > **Users**.
3. Select **+** to add a new user.
4. On the **Settings** tab, enter:
   - **First Name:** `RPA`
   - **Last Name:** `User`
   - **Username:** `RPAUser`
   - **Password:** a unique value — write it down. You will use it again in Step 6.
5. Select the **Save** button.
6. Select the **Roles** tab, select the `Role_ocadm` role, and select the **Save** button.
7. Select the **Settings** tab, select the **Enable external tokens** option, and select the **Save** button.

## Step 2 — Add an RPA agent in Solution Manager

To define the RPA agent that OpCon routes jobs to, complete the following steps:

1. In Solution Manager, go to **Library** > **Agents**.
2. Select **Add** to add a new Agent.
3. Give the agent a name and write it down. You will use it again in Step 6.
4. Select **RPA** from the **Type** list above **General Settings**.
5. When prompted, enter the Netcom Relay name. You must do this before you can open the **RPA Settings** page:
   - **Cloud:** enter the name you used during Relay installation.
   - **On-premises (no Relay):** type `<Default>`.

   ![Solution Manager prompt for the Netcom Relay name](../static/img/netcomname.png)

6. Open the **RPA Settings** section at the bottom of the page. Leave this page open — you will return to it in Step 6.

## Step 3 — Install Netcom Relay (cloud only)

If you are installing OpCon RPA for cloud, install Netcom Relay before continuing. For full instructions, see [Netcom Relay setup](https://help.smatechnologies.com/opcon-relay#install).

:::tip
Netcom Relay installation requires local administrator rights. When prompted to allow the app to make changes to your device, select **Yes**.
:::

After Relay is installed, return to this page and continue with Step 4.

## Step 4 — Copy the ACS Plugin DLL

To copy the ACS Plugin DLL into the OpCon plugins directory, complete the following steps:

1. In Windows File Explorer, open the OpCon plugins directory:
   - **On-premises:** `C:\ProgramData\OpConxps\SAM\plugins`
   - **Cloud:** open `C:\ProgramData\OpConxps\` and drill down to the `Plugins` directory.
2. Copy `sma.acs.OpConRPA.dll` into the plugins directory.

## Step 5 — Install the RPA Agent

To install the RPA Agent on the host Windows system, complete the following steps:

1. Double-click `RPAAgent_x.y.z.msi` (the version number may differ).
2. When prompted to allow this app to make changes to your device, select **Yes**.
3. When the installation finishes, the RPA Tray Client opens automatically.

## Step 6 — Connect the RPA Agent to OpCon

In this step, you switch between the RPA Tray Client (on the Windows host) and Solution Manager (in your browser, on the page you left open in Step 2).

### 6a. Copy the RPA HTTPS URI into Solution Manager

1. In the RPA Tray Client, select **Settings** in the left menu.

   ![RPA Tray Client with the Settings menu item highlighted on the left](../static/img/RPAInstaller_Step4.png)

2. On the **RPA Agent** tab, copy the value from the **HTTPS URI** field.

   ![RPA Tray Client Settings screen showing the RPA Agent tab and the HTTPS URI field](../static/img/RPAInstaller_Step5.png)

3. In Solution Manager, paste the URI into the **RPA Server URI** field of the **RPA Settings** section you opened in Step 2.

   ![Solution Manager RPA Settings section showing the RPA Server URI field](../static/img/RPAInstaller_Step6.png)

### 6b. Generate and apply the API token

1. Back in the RPA Tray Client, select **Generate Token**. The token is automatically copied to your clipboard.

   ![RPA Tray Client showing the Generate Token button](../static/img/RPAInstaller_Step7.png)

2. In Solution Manager, paste the token into the **API Token** field.

   ![Solution Manager RPA Settings section showing the API Token field](../static/img/RPAInstaller_Step8.png)

3. Save your Solution Manager changes.

### 6c. Configure the OpCon API connection

1. In the RPA Tray Client **Settings** screen, select the **OpCon API** tab.

   ![RPA Tray Client Settings screen showing the OpCon API tab](../static/img/RPAInstaller_Step10.png)

2. Fill in the fields:

   | Field | Value |
   |-------|-------|
   | **OpCon API URL** | The URL of your Solution Manager instance. For on-premises, this is typically the base domain. |
   | **OpCon API User** | The `RPAUser` username you created in Step 1. |
   | **OpCon API Password** | The password you set when creating the RPA user in Step 1. |
   | **OpCon Agent Name** | The agent name you set in Step 2. |

3. Select **Get OpCon API Token** in the lower-right corner of the RPA Tray Client.

The RPA Agent displays a success message when it can reach the OpCon API. Setup is complete.

## Verify the installation

After the success message:

- Confirm the RPA Tray Client is running in the Windows system tray.
- In Solution Manager, confirm the RPA agent shows as available under **Library** > **Agents**.

## FAQs

**Do I need Netcom Relay if I am not using OpCon Cloud?**
No. Netcom Relay is required only for cloud integrations with OpCon CORE Automate / Solution Manager. On-premises installations skip Step 3.

**Where do I place the ACS Plugin DLL on an on-premises installation?**
For on-premises installations, place `sma.acs.OpConRPA.dll` in `C:\ProgramData\OpConxps\SAM\plugins`.

**Which role does the RPA user need?**
The RPA user needs the `Role_ocadm` role and the **Enable external tokens** option turned on.

**What do I enter for the Netcom Relay name on an on-premises installation?**
Type `<Default>`. Solution Manager requires a value before it lets you open the RPA Settings page.

**The OpCon API URL — is that my Solution Manager URL?**
Yes. For on-premises, this is typically the base domain of your Solution Manager instance.

## Glossary

| Term | Definition |
|------|-----------|
| ACS Plugin DLL | The OpCon Application Connection Studio plugin file (`sma.acs.OpConRPA.dll`) used by the OpCon SAM to communicate with the RPA Agent. |
| RPA Agent | The agent that performs robot task automation on a target Windows machine. |
| RPA Tray Client | The local Windows interface that runs alongside the RPA Agent, used to configure HTTPS URI, API tokens, and OpCon API connection details. |
| Netcom Relay | The OpCon component that routes communication between the OpCon Server and the RPA Agent for cloud installations. |
| OpCon Web Installer (OWI) | A tool that bundles OpCon installer artifacts, including the ACS Plugin DLL and the RPA Agent Installer. |
| Role_ocadm | The OpCon role required by the RPA user to access RPA features. |
| Solution Manager | The OpCon web interface used to configure users, agents, and schedules. |
