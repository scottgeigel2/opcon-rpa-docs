---
sidebar_label: 'Installation - OpCon RPA Agent and Netcom Relay'
hide_title: true
---

# Installation - OpCon RPA

### Install OpCon RPA for Cloud
The RPA Agent and Netcom Relay will need to be installed on the windows system that will be responsible for hosting the server and/or client and executing the RPA workflow.

You should have 3 items ready for before you get started with the RPA cloud setup. 

1.	The NetCom Relay installer, <ins>SMANetcomRelay.exe</ins>.  The NetCom Relay installer is not needed if you are not integrating RPA with a cloud instance of OpCon CORE Automate/Solution Manager.  For instructions on how to set up Relay, [click here](https://help.smatechnologies.com/opcon-relay#install).
  - On your Windows Computer open the command prompt and choose “Run as Administrator”.
  - When prompted if you’d like to allow this app to make changes to your device, choose “Yes”.

2.	The ACS Plugin DLL named <ins>sma.acs.OpConRPA.dll</ins>.

3. The RPA Agent Installer named <ins>RPAAgent__*x.y.z*__.msi</ins> (x.y.z being the version number).

:::tip Note

Use the [OpCon Web Installer (OWI)](https://github.com/smatechnologies/opcon-web-installer/releases) to download the **ACS Plugin DLL** (In the Integrations section) and **RPA Agent Installer**  (In the Agents section).

:::

#### RPA Agent and Relay Connection setup
1.	In your Windows File Explorer Navigate to C:\Programdata.   
2.	Drill down into the OpConxps directory until you reach the Plugins directory.
3.	Open the Plugins directory, this is where you’re going to put the RPA Plugin DLL file. For On-Prem users this should be C:\ProgramData\OpConxps\SAM\plugins.
 1.	Navigate to where you have the The ACS Plugin DLL.  It is called sma.acs.OpConRPA.dll. 
 2.	Move this .dll file into the plugins directory shown in step 2 of this section.

#### Testing what you’ve set up so far:
1.	Opening Solution Manager.
2.	Navigate to the Library > Agents.
3.	Click Add to add a new Agent.
 1.	Give your agent a name, remember this name, you’ll need it later. 
 2.	Select RPA from the type drop down above General Settings.
 2.	When prompted, enter the Netcom Relay Name before you can access the RPA Settings page — enter the name used during relay installation, or type `<Default>` if you are not using a relay (see screenshot below).
 
   ![Netcom Relay Name Prompt](../static/img/netcomname.png)
 3.	Open the RPA Settings section at the bottom of the page.
  1.	Leave this open, you’ll come back to it shortly.

#### FINALLY the RPA Installer
1.	Double click on the RPA Agent Installer.  It is named RPAAgent1.0.0 (though the version number might differ)
2.	When prompted if you’d like to allow this app to make changes to your device, choose “Yes”.
3.	When the installation is complete you will see the RPA user interface pop up on your screen.
4.	On the left side of the RPA interface click “Settings”.
![Activate License](../static/img/RPAInstaller_Step4.png) 
5.	When on the “Settings” screen make sure you’re on the RPA Agent tab and copy the value out of the Https URI field.
![Activate License](../static/img/RPAInstaller_Step5.png) 
6.	Paste that URI value into the RPA Server URI in Solution Manager.
![Activate License](../static/img/RPAInstaller_Step6.png) 
7.	Back in the RPA interface, click generate token.  Note, that this automatically copies the token to your clipboard.
![Activate License](../static/img/RPAInstaller_Step7.png) 
8.	Paste that token in the API Token field within Solution Manager.
![Activate License](../static/img/RPAInstaller_Step8.png) 
9.	Click to save your Solution Manager changes

