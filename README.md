# polestar_e2e_tests
**Introduction**:
Since polestar is single page application, I am using playwright to handle the screen and which is feasible to handle all the webelements
Polestar has multilple navigation, Hence I am using POM (PAGE OBJECT MODEL) methodology to handle the screens.

**Framework Folder Structure:**
As per the POM you can observe below mentioned folders and each folder consists of respective javascript file to handle the screens.
- Pages - This folder contains basePage.js, Polestar2.js and Polestar3.js and these pages contains the fucntions which are sepecific to that screen
- tests - This folder contains the specs/tests
- reports - holds the execution reports

**Setup project  and Execution:**
Pre-requisite: To setup playwright, we should have node and editor, please install the node latest version and VS code in your device

