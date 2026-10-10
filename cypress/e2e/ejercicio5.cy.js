describe("Ejercicio 5 - Registro", () => {
  it("Crea una cuenta nueva", () => {

    // Correo diferente en cada ejecución
    const correo = "miguel" + Date.now() + "@correo.com"

    // Abrir la página de registro
    cy.visit("https://automationexercise.com/login")

    // Primer formulario
    cy.get('[data-qa="signup-name"]').type("Miguel")
    cy.get('[data-qa="signup-email"]').type(correo)
    cy.get('[data-qa="signup-button"]').click()

    // Información de la cuenta
    cy.get("#id_gender1").check()

    cy.get('[data-qa="password"]').type("Prueba1234")

    cy.get('[data-qa="days"]').select("10")
    cy.get('[data-qa="months"]').select("May")
    cy.get('[data-qa="years"]').select("2000")

    // Opciones
    cy.get("#newsletter").check()
    cy.get("#optin").check()

    // Datos personales
    cy.get('[data-qa="first_name"]').type("Miguel")
    cy.get('[data-qa="last_name"]').type("Colindres")
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

    // Verificar resultado
    cy.contains("ACCOUNT CREATED!").should("be.visible")
  })
})