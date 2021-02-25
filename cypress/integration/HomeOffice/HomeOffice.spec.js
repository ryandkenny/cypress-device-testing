Given('I set the device for testing', ()=>{
    cy.setDevice()
})

Given('I hit the {word} url', (url)=>{
        cy.visit(url)
        cy.checkPageA11y()
})


And('I click the search button', ()=>{
    if(Cypress.env('device') !== 'default') {
        cy.get('#global-header > div > div > button').click()
        cy.get('#search > div > div > div > div > button').click()

    }
    else {
        cy.get('#search > div > div > div > div > button').click()

        }
    }
)

Then('The header is {string}', (header)=>{
        cy.get('#content > form > div > label > h1')
            .should('contain', header)
        cy.checkPageA11y()
    }
)