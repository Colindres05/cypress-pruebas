const config = require('./auditoria.config.json');

describe('EXAMEN - SERIE I - OWASP Juice Shop', () => {

  it('01 - Abrir y buscar un producto', () => {

    // Abrir la aplicación
    cy.visit(config.objetivo, {
      timeout: config.tiempoEspera
    });

    // Cerrar ventana de bienvenida
    cy.get('button[aria-label="Close Welcome Banner"]')
      .click();

    // Aceptar aviso de cookies
    cy.get('a[aria-label="dismiss cookie message"]')
      .click();

    // Guardar evidencia de la aplicación
    cy.screenshot('01-aplicacion-abierta');

   // Abrir buscador
cy.get('mat-icon')
  .contains('search')
  .click();

cy.get('mat-icon')
  .contains('search')
  .click();

cy.get('app-mat-search-bar input[type="text"]')
  .filter(':visible')
  .first()
  .type(config.producto + '{enter}');

cy.contains(config.producto)
  .should('be.visible');

cy.screenshot('02-producto-encontrado');

    // Verificar el producto
    cy.contains(config.producto)
      .should('be.visible');

    // Guardar evidencia
    cy.screenshot('02-producto-encontrado');

  });

});