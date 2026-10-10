describe("Ejercicio 8 - Carrito", () => {
  it("Agrega dos productos", () => {

    // Producto 1
    cy.visit("https://automationexercise.com/product_details/1")

    cy.get("button.cart").click()

    cy.contains("Continue Shopping").click()

    // Producto 2
    cy.visit("https://automationexercise.com/product_details/2")

    cy.get("button.cart").click()

    // Ir al carrito
    cy.contains("View Cart").click()

    // Verificar que hay 2 productos
    cy.get(".cart_description")
      .should("have.length", 2)
  })
})