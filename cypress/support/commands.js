// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("registrarUsuario", (nombre, correo) => {
  cy.visit("https://automationexercise.com/login")

  // Primer formulario
  cy.get('[data-qa="signup-name"]').type(nombre)
  cy.get('[data-qa="signup-email"]').type(correo)
  cy.get('[data-qa="signup-button"]').click()

  // Datos de la cuenta
  cy.get("#id_gender1").check()
  cy.get('[data-qa="password"]').type("Prueba1234")

  cy.get('[data-qa="days"]').select("10")
  cy.get('[data-qa="months"]').select("May")
  cy.get('[data-qa="years"]').select("2000")

  // Datos personales
  cy.get('[data-qa="first_name"]').type(nombre)
  cy.get('[data-qa="last_name"]').type("Prueba")
  cy.get('[data-qa="company"]').type("UMG")
  cy.get('[data-qa="address"]').type("Ciudad de Guatemala")
  cy.get('[data-qa="address2"]').type("Zona 1")

  cy.get('[data-qa="country"]').select("Canada")

  cy.get('[data-qa="state"]').type("Guatemala")
  cy.get('[data-qa="city"]').type("Guatemala")
  cy.get('[data-qa="zipcode"]').type("01001")
  cy.get('[data-qa="mobile_number"]').type("55555555")

  // Crear cuenta
  cy.get('[data-qa="create-account"]').click()
})