describe('PRUEBA 2 - Seguridad de autenticación', () => {

  it('Debe rechazar credenciales incorrectas', () => {

    // Abrir Juice Shop
    cy.visit('https://juice-shop.herokuapp.com/#/login');

    // Cerrar ventana de bienvenida
    cy.get('button[aria-label="Close Welcome Banner"]')
      .should('be.visible')
      .click();

    // Cerrar aviso de cookies
    cy.get('body').then(($body) => {
      if ($body.find(
        'a[aria-label="dismiss cookie message"]'
      ).length) {
        cy.get(
          'a[aria-label="dismiss cookie message"]'
        ).click();
      }
    });

    // Introducir credenciales ficticias
    cy.get('#email')
      .should('be.visible')
      .type('usuario.inexistente@example.com');

    cy.get('#password')
      .type('ClaveIncorrecta123', { log: false });

    // Intentar iniciar sesión
    cy.get('#loginButton')
      .should('be.visible')
      .click();

    // Comprobar que rechaza el acceso
    cy.contains('Invalid email or password')
      .should('be.visible');

    // Comprobar que continúa en login
    cy.url()
      .should('include', '/login');

    // Guardar evidencia
    cy.screenshot('02-acceso-rechazado');

  });

});