---
sidebar_label: 'Configuration Overview'
hide_title: true
---

### Overview of RPA w/ OpCon

#### RPA Configuration in VisualCron  

This is a representation of the structure of all VisualCron objects to consider when planning a workflow.    

 ![RPA Job Flow](../static/img/rpajobflow.png)  

:::note
The flow is: Trigger > Condition > Task > Notification.
1. One trigger (type time or event) fires a Job to run.
2. A condition is a "check" which is evaluated before a Job or a Task is launched.
3. A Job can include one or more Tasks of different types.
4. When the Job and/or its Tasks are completed, one or more notifications (of different types) may be performed.
:::

:::note

#### RPA Workflow Object Reference

| RPA Object | OpCon Equivalent       | Description                                                                                                       |
|------------|------------------------|-------------------------------------------------------------------------------------------------------------------|
|Job         |Schedule                |A job in VisualCron is similiar to a schedule in OpCon in their ability to group and execute one or more processes.|
|Task        |Job                     |A task in VisualCron is similiar to a job in OpCon representing the execution of a specific process                |
|Trigger     |Event or Cloud Trigger  |A trigger in VisualCron performs actions similiar to OpCon frequencies and events.                                 | 
|Condition   |Dependency              |A condition in VisualCron is similiar to a job dependency in OpCon.                                                |
|Credential  |System/Batch Users      |A credential performs a similiar function to a batch user or windows/system user in OpCon.                         |
|Connection  |Agent Users             |A connection in VisualCron is similiar to configuring service specific user credentials for an Agent in OpCon.     | 

:::