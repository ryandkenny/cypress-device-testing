Given('I hit the {word} url', (url)=>{
        cy.visit(url)
        cy.checkPageA11y()
})


And('I click the search button', ()=>{
        cy.get('#search > div > div > div > div > button').click()
    }
)

Then('The header is {string}', (header)=>{
        cy.get('#content > form > div > label > h1')
            .should('contain', header)
        cy.checkPageA11y()
    }
)