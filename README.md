# polestar_e2e_tests
**Introduction**:
Since polestar is single page application, I am using playwright to handle the screen and which is feasible to handle all the webelements

Polestar has multilple navigation, Hence I am using POM (PAGE OBJECT MODEL) methodology to handle the screens.

**Framework Folder Structure:**
As per the POM you can observe below mentioned folders and each folder consists of respective javascript file with resuable functions specific to that screen.
- Pages - This folder contains basePage.js, Polestar2.js and Polestar3.js and these pages contains the fucntions which are sepecific to that screen
- tests - This folder contains the specs/tests
- reports - holds the execution reports

**Setup project and Execution:**
Pre-requisite: To setup playwright, we should have node and editor, please install the node latest version and VS code in your device
Resource: 
1. Node: https://nodejs.org/en/download
2. VS Code: https://code.visualstudio.com/
3. Execution: run below command

   git clone https://github.com/kiranlkumar/polestar_e2e_tests.git   <to checkout the code>

   npm install    < to install dependencies >

   npm run test   < to run tests in parallel >
   
   

   

