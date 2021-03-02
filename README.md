# cypress-device-testing
# Steps to run 
- Clone repo
- Ensure you have node.js installed https://nodejs.org/en/download/
- Run *./node_modules/.bin/cypress install --force*  
- Run *npm install cypress --save-dev*
- run npx open, often you will not have executable permissions, to fix this run chmod 755 *Directory-name*
    For example mine was: 
        *chmod 755 /Users/ryan/Library/Caches/Cypress/6.6.0/Cypress.app/Contents/MacOS/Cypress*
-  Install cypress-axe: *npm install --save-dev cypress-axe*
-  Install peer dependencies: *npm install --save-dev cypress axe-core* 
- Run *./node_modules/.bin/cypress open*

Now you should be able to run cypress using the *npx cypress open* command

# Accessibility Testing
A custom command has been added with axe integration for accessibility testing with custom reporting.

Adding cy.checkPageA11y to each new page hit should run axe accessibility testing with custom reporting
output colour coded based on severity. Code is available in support/commands.js

# Device Testing
Device testing is done via passing in an environment variable from the command line
e.g. *npx cypress open --env device=IPhone8+*

This will run the tests on a viewport that matches that of an IPhone 8+. Currently
supported devices for testing can be found in commands.js under the setDevice() function.
This pattern can be followed to add additional devices for testing.