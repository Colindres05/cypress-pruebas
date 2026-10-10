describe("Ejercicio 7 - Sesión", () => {
  it("Registra, cierra e inicia sesión", () => {

    const correo = "sesion" + Date.now() + "@correo.com"
    const password = "Prueba1234"

    // Registrar usuario usando el comando del ejercicio 6
    cy.registrarUsuario("Miguel", correo)

    // Continuar después de crear la cuenta
    cy.get('[data-qa="continue-button"]').click()

    // Cerrar sesión
    cy.get('a[href="/logout"]').click()

    // Volver a iniciar sesión
    cy.get('[data-qa="login-email"]').type(correo)
    cy.get('[data-qa="login-password"]').type(password)
    cy.get('[data-qa="login-button"]').click()

    // Verificar que inició sesión correctamente
    cy.contains("Logged in as").should("be.visible")
  })
})