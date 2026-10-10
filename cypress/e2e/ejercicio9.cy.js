describe("Ejercicio 9 - Compra E2E", () => {
  it("Registro, carrito, checkout y pago", () => {

    const correo = "compra" + Date.now() + "@correo.com"

    // 1. Registrar usuario
    cy.registrarUsuario("Miguel", correo)

    // 2. Continuar después de crear la cuenta
    cy.get('[data-qa="continue-button"]').click()

    // 3. Abrir un producto
    cy.visit("https://automationexercise.com/product_details/1")

    // 4. Agregarlo al carrito
    cy.get("button.cart").click()

    // 5. Ir al carrito
    cy.contains("View Cart").click()

    // 6. Proceder al checkout
    cy.contains("Proceed To Checkout").click()

    // 7. Realizar pedido
    cy.contains("Place Order").click()

    // 8. Datos de pago
    cy.get('[data-qa="name-on-card"]').type("Miguel Prueba")
    cy.get('[data-qa="card-number"]').type("4111111111111111")
    cy.get('[data-qa="cvc"]').type("123")
    cy.get('[data-qa="expiry-month"]').type("12")
    cy.get('[data-qa="expiry-year"]').type("2030")

    // 9. Confirmar pago
    cy.get('[data-qa="pay-button"]').click()

    // 10. Verificar que la compra terminó correctamente
    cy.contains("Order Placed!").should("be.visible")
  })
})