describe("sauce labs basic spec", function () {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit('/index.html');
    })

    it("Should be login and logout with standard user details", function () {
        cy.fixture('user-details.json').then((usersData) =>{

            cy.get('#user-name')
                .should('be.visible')
                .clear()
                .type(usersData.standard_user.userName)

            cy.get('#password')
                .should('be.visible')
                .clear()
                .type(usersData.standard_user.password)
        })

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
    it("Should be see error message with locked out details", function () {
        cy.fixture('user-details.json').then((usersData) =>{

            cy.get('#user-name')
                .should('be.visible')
                .clear()
                .type(usersData.locked_out_user.userName)

            cy.get('#password')
                .should('be.visible')
                .clear()
                .type(usersData.locked_out_user.password)
        })

        cy.get('#login-button')
            .should('be.visible')
            .click()

        cy.xpath('//h3[@data-test=\'error\']')
            .should('be.visible')
    })

    afterEach(() => {
        cy.end();
    })
})