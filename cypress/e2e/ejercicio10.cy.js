describe("Ejercicio 10 - Modificar carrito", () => {
  it("Cambia la cantidad y elimina el producto", () => {

    // Abrir producto
    cy.visit("https://automationexercise.com/product_details/1")

    // Cambiar cantidad de 1 a 3
    cy.get("#quantity").clear().type("3")

    // Agregar al carrito
    cy.get("button.cart").click()

    // Ver carrito
    cy.contains("View Cart").click()

    // Verificar que la cantidad sea 3
    cy.get(".cart_quantity")
      .should("contain.text", "3")

    // Eliminar producto
    cy.get(".cart_quantity_delete").click()

    // Verificar que ya no haya productos
    cy.get(".cart_description")
      .should("not.exist")
  })
})