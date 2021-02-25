// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
const severityIndicators = {
    minor:    '⚪️',
    moderate: '🟡',
    serious:  '🟠',
    critical: '🔴',
}

function callback(violations) {
    violations.forEach(violation => {
        const nodes = Cypress.$(violation.nodes.map(node => node.target).join(','))

        Cypress.log({
            name: `${severityIndicators[violation.impact]} A11Y`,
            consoleProps: () => violation,
            $el: nodes,
            message: `[${violation.help}](${violation.helpUrl})`
        })

        violation.nodes.forEach(({ target }) => {
            Cypress.log({
                name: '🔧',
                consoleProps: () => violation,
                $el: Cypress.$(target.join(',')),
                message: target
            })
        })
    });
}

function setDevice() {
    let device = Cypress.env('device')
    switch (device) {
        case 'IPhoneXR':
            cy.viewport(414, 896)
            break
        case 'IPhone7':
            cy.viewport(375, 667)
            break
        case 'IPhone8+':
            cy.viewport(414, 736)
            break
        default:
            break
    }
}

Cypress.Commands.add("setDevice", () => {
    setDevice()
})


Cypress.Commands.add("checkPageA11y", () => {
    cy.injectAxe()
    cy.checkA11y(null, null, callback, true)
})





