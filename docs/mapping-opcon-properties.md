---
sidebar_label: 'Mapping OpCon Properties'
---

# Mapping OpCon Properties
### Schedule and Job Instance Properties from OpCon
To pass input and output data to RPA, you can use OpCon Instance Properties.
This will work with both single and multi instance schedule builds, but for this example, we'll use single instance.

![A screenshot of Solution Manager's Master Job Definition page where a user has added a Job Instance Property](../static/img/opcon_property_mapping/SM_definingmyji.png)
![A screenshot of Solution Manager's Master Job Definition page where a user has added a Schedule Instance Property](../static/img/opcon_property_mapping/SM_definingmysi.png)

These pictures display values that are going to be used as input values. While it is not necessary to define an 
output-only instance property, as they will be added to the daily schedule/job after running, it may be easier
to define output-only properties ahead of time
### OpCon Instance Properties in RPA
![New RPA Variables screen displaying OpCon variables section](../static/img/opcon_property_mapping/RPA_newvarscreen.png)
RPA has added a new section to the variables screen for OpCon Variables. This expands to the 2 options for Schedule and Job Instance Properties.
![The new Add/Edit screen for Instance Properties](../static/img/opcon_property_mapping/RPA_blanksi.png)
Both Job and Schedule Instance Properties have this edit form.
#### Name/Unique key
This will be the name of the Schedule or Job Instance Property. Its name will be identical to how it was defined in Solution Manager
so like the previous screenshots, the Name here will be "mysi"
#### Default Value
This value will be selected if OpCon has not supplied an Instance Property with the name. For debugging purposes, it can be
helpful to put a known bad value that is easy to spot. This value will also be used whenever performing a Test Run or running
from the task grid of RPA; making this useful for testing how the task will perform before actually attempting to run the job 
from OpCon.
#### Output Expression
This is what the Job/Schedule Instance Property will be assigned after the task runs; this will occur whether the task succeeds or fails.
**If no output alteration is desired, this field can be left blank**.
RPA will evaluate the text in this field as an Expression; so anything from the RPA Variables screen may be used such as *User Variables* and
*Builtin Functions* (such as Math, File variables, etc).

![A demonstration of using a builtin function](../static/img/opcon_property_mapping/RPA_definesi.png)
*This demonstrates assigning mysi to a string with the contents of airports.txt appended*
![A demonstration of assigning a constant string](../static/img/opcon_property_mapping/RPA_defineji.png)
*This demonstrates assigning myji to a constant string*
### Execution
#### Use in Task Execution
A Job/Schedule Instance Property can be referenced in a variable expression with:
  * `{OPCON(SCHEDULE|myvar)}` -- will be replaced with the contents of the Schedule Instance Property "myvar"
  * `{OPCON(JOB|myvar)}` -- will be replaced with the contents of the Job Instance Property "myvar"

**The only way to change an Instance Property is through *Ouput Expression*s. The "Set variable" task only works for *User Variable*s.
You may however copy Instance Property values into a User Variable and then set the *Output Expression* to the final value of 
the *User Variable* **
![Finding the desired variable expression in the Variables screen](../static/img/opcon_property_mapping/RPA_example_modifying_step_to_use_si.png)
![Referencing the value of the Instance Property within the Task](../static/img/opcon_property_mapping/RPA_example_modifying_step_to_use_si2.png)
#### An Example of running with Default Values
![A screenshot of the outcome from running from the Task Grid](../static/img/opcon_property_mapping/RPA_running_task_manually_results.png)
Above is a screenshot where the sample task has ran from the Task Grid. The Robot task has printed the Instance Properties into 
notepad.exe.
#### Running from SM
![A screenshot of the outcome from running from Solution Manager](../static/img/opcon_property_mapping/RPA_running_task_from_SM.png)
Above is a screenshot where the sample task has ran from Solution Manager. The Robot task has printed the Instance Properties  
passed into RPA from our test job into notepad.exe.

Now that the Output Expression has been evaluated, we can see them in Solution Manager's Daily Job/Schedule screens.
*Note: you can use the **Variable Key** and **Variable Preview** fields to test your output expressions in RPA's Variable Screen.
![The Job Instances defined in the resulting Daily Job](../static/img/opcon_property_mapping/RPA_running_task_after_SM_ji.png)
![The Job Instances defined in the resulting Daily Schedule](../static/img/opcon_property_mapping/RPA_running_task_after_SM_si.png)

