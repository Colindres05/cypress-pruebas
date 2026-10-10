const nombres = require("../fixtures/usuarios.json")

describe("Ejercicio 6 - Varios usuarios", () => {

  nombres.forEach((nombre) => {

    it("Registra a " + nombre, () => {

      const correo =
        nombre.toLowerCase() +
        Date.now() +
        "@correo.com"

      cy.registrarUsuario(nombre, correo)

      cy.contains("ACCOUNT CREATED!")
        .should("be.visible")
    })

  })

})