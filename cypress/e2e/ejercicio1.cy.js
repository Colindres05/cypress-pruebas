describe("Ejercicio 1 - Inicio", () => {
  it("La página de inicio carga", () => {
    cy.visit("https://automationexercise.com/")

    cy.get(".logo").should("be.visible")
  })
})