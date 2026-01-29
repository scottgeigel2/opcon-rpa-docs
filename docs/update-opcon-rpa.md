---
sidebar_label: 'Update - OpCon RPA Agent and ACS plugin'
hide_title: true
---

# Update - OpCon RPA

### Update Considerations
#### 1.0.2
##### Plugin update
No update was made to the ACS plugin.
##### Agent/TrayClient
This version fixed a bug where passwords for Network Credentials were not being saved.
If you had any previous NetworkCredentials, even if you were not using them, they will need to have their passwords updated if they are to be
used with an Execution Context. Passwords are encrypted with Windows Data Protection API.

#### 1.0.1
##### Plugin update
An update was made to the ACS plugin and is necessary to receive a bugfix on Agent status showing as available even if the Tray Client isn't actually running.

### Install OpCon RPA for Cloud
The RPA Agent and Netcom Relay should already be installed from following the [Installation Instructions](./installation-opcon-rpa.md)

:::tip Note

Use the [OpCon Web Installer (OWI)](https://github.com/smatechnologies/opcon-web-installer/releases) to download the **ACS Plugin DLL** (In the Integrations section) and **RPA Agent Installer**  (In the Agents section).

:::

Check the upgrade considerations to see if you need to update the ACS plugin

:::info Backup Instructions
If you would like to make a backup of your settings:

1. **Stop the RPA Agent service:** Press the Windows key, type **services.msc**, and press Enter. In the list, find "OpCon RPA Agent" (or "RPA Agent"), right-click it, and choose **Stop**.
2. **Open the installation folder:** Open File Explorer, type or paste **C:\Program Files\RPAAgent** into the address bar, and press Enter.
3. **Back up your settings:** Right-click **appsettings.json** → **Copy**, then paste it into a safe folder (for example, your Desktop or Documents). Do the same for the **DataCache** folder—copy the whole folder to your safe location. Optionally, right-click the DataCache folder and choose **Send to** → **Compressed (zipped) folder** to create a zip file.

:::

The RPA Agent Installer is named <ins>RPAAgent__*x.y.z*__.msi</ins> (x.y.z is the version number). After downloading from OWI, it is usually in your **Downloads** folder (Open File Explorer and click "Downloads" in the left side, or check your browser’s download list).

Double-click the .msi file. When Windows asks "Do you want to allow this app to make changes to your device?", choose **Yes**. The update should then complete without further steps and the Tray Client will restart.


