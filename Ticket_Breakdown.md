# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1: Modify the Agents Table

Acceptance criteria: Modify the Agents table to add a new field for "custom_id" that will be used to store the custom ids entered by Facilities for each Agent they work with. This field should be unique and indexed to ensure data integrity.
Time/effort estimate: 2-3 hours
Implementation details: This task will require modifying the Agents table schema in the database, writing a database migration script to update existing tables, and updating the ORM (Object-Relational Mapping) layer used to access the Agents table in the application code.


Ticket 2: Update the Agent Assignment Functionality

Acceptance criteria: Modify the Agent assignment functionality to include the custom_id field when an Agent is assigned to a Shift. This custom_id should be saved in the database along with the rest of the Shift information.
Time/effort estimate: 2-3 hours
Implementation details: This task will require updating the database schema for the Shifts table to include the custom_id field, modifying the Shift assignment functionality to include the custom_id field, and updating the ORM layer to reflect these changes.


Ticket 3: Update the Shift Retrieval Functionality

Acceptance criteria: Modify the getShiftsByFacility function to return the custom_id for each Agent assigned to a Shift, in addition to the rest of the Shift information. This function should be backwards-compatible with existing clients that do not provide custom_ids.
Time/effort estimate: 2-3 hours
Implementation details: This task will require modifying the SQL query used to retrieve Shift data to include the custom_id field from the database, and modifying the function to return this field in the response.


Ticket 4: Update the Report Generation Functionality

Acceptance criteria: Modify the generateReport function to use the custom_id field instead of the internal database id when generating reports. This should be backwards-compatible with reports generated before this change.
Time/effort estimate: 2-3 hours
Implementation details: This task will require modifying the function to look up the custom_id of each Agent assigned to a Shift in the database, and using this field in the report generation process.
Overall, this ticket breakdown includes four individual tasks that build on each other to achieve the desired feature. These tasks should be performed in the order listed to ensure smooth implementation of the feature.

