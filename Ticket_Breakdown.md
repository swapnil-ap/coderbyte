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

Backend tickets:

1. Ticket 1: Database changes: 
    Aim: Update database according to new field added.

    Task Breakdown: 
    1. Add a new field 'custom_id' in table 'agents'. type: Char, min_length: 4, max_length: 256,Unique, Not null  
    2. It can't be null so generate random id if for all agents of length 256


2. Ticket 2: Backend Changes:
    Aim: Update SaveAgents API according to new field added.

    Task Breakdown:
    1. Add a new field 'custom_id' to update agents table.
    2. Facility Permission must be checked before updating custom_id of agents (meaning facility can only update those agents which are wokring with them)
    3. check length of custom_id before executing any transaction over database

    Acceptance criteria:
    1. API must be checked with Unit test before giving it to front-end team
    2. Add the API on Pastman collection and swagger page in documentations

FrontEnd tickets:

3. Ticket 3. UI changes
    Aim: Add the User Interface for adding Custom Id on agents page

    Task Breakdown:
    1. Add a input box for custom Id, give a buttom to generate a random id of length 256
    2. Give a button to generate random custom id for all agents not having custom Id

    Acceptance criteria:
    1. UI needs to be pixel perfect as per design shared by designing team

4. Ticket 4. Generated report changes:
    Aim: Add the Custom Id in generated PDF

    Task Breakdown:
    1. Update the fucntion `generateReport` taking input of custom id instad of internal database id
    2. Add the custom id column in generated PDF as per design shared by designing team

    Acceptance criteria:
    1. UI needs to be pixel perfect as per design shared by designing team