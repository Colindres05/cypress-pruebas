describe("Ejercicio 4 - Suscripción", () => {
  it("Se suscribe con un correo", () => {
    cy.visit("https://automationexercise.com/")

    cy.get("#susbscribe_email")
      .scrollIntoView()
      .type("prueba@correo.com")

    cy.get("#subscribe").click()

    cy.get(".alert-success").should("be.visible")
  })
})