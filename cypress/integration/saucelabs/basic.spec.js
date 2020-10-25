describe("sauce labs basic spec", function () {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit('/index.html');
    })

    it("Should be login and logout", function () {
        cy.get('#user-name')
            .should('be.visible')
            .clear()
            .type('standard_user')

        cy.get('#password')
            .should('be.visible')
            .clear()
            .type('secret_sauce')

        cy.get('#login-button')
            .should('be.visible')
            .click()

        cy.xpath('//button[contains(text(),\'Open Menu\')]')
            .should('be.visible')
            .click()

        cy.get('#logout_sidebar_link')
            .should('be.visible')
            .click()

        cy.get('#user-name')
            .should('be.visible')
    })

    afterEach(() => {
        cy.end();
    })
})