describe("Ejercicio 2 - Productos", () => {
  it("Muestra productos", () => {
    cy.visit("https://automationexercise.com/products")

    cy.get(".features_items .product-image-wrapper")
      .should("have.length.greaterThan", 0)
  })
})