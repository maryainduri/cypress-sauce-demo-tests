// Login
Cypress.Commands.add("login", (email, password) => {
    cy.clearCookies();
    cy.visit('/index.html');

    cy.get('#user-name')
        .should('be.visible')
        .clear()
        .type(email);

    cy.get('#password')
        .should('be.visible')
        .clear()
        .type(password);

    cy.get('#login-button')
        .should('be.visible')
        .click();
})

// Logout
Cypress.Commands.add("logout", () => {

    cy.xpath('//button[contains(text(),\'Open Menu\')]')
        .should('be.visible')
        .click()

    cy.get('#logout_sidebar_link')
        .should('be.visible')
        .click()

    cy.get('#user-name')
        .should('be.visible');
})

//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
