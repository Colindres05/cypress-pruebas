describe("Ejercicio 3 - Buscar", () => {
  it("Busca y muestra resultados", () => {
    cy.visit("https://automationexercise.com/products")

    cy.get("#search_product").type("dress")
    cy.get("#submit_search").click()

    cy.get(".features_items").should("contain.text", "Dress")
  })
})