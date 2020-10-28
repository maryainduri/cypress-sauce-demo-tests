describe("sauce labs purchase flow end to end", function () {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit('/index.html');
    })

    it("Should be able to complete the purchase flow", function () {
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

        // Select 1st product just for this test
        cy.xpath('//div[@class=\'inventory_list\']//div[1]//div[3]//button[1]')
            .click()

        cy.get('#shopping_cart_container')
            .click()
        cy.get('a[class=\'btn_action checkout_button\']')
            .should('be.visible')
            .click()

        // enter details
        cy.get('#first-name')
            .should('be.visible')
            .type("Automation John")

        cy.get('#last-name')
            .should('be.visible')
            .type("Philip")

        cy.get('#postal-code')
            .should('be.visible')
            .type("ig1 2fj")

        cy.get('input[value=\'CONTINUE\']')
            .should('be.enabled')
            .click()

        cy.get('a[class=\'btn_action cart_button\']')
            .should('be.visible')
            .click()

        cy.get('img[class=\'pony_express\']')
            .should('be.visible')

        // Logout

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