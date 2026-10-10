describe('PRUEBA 3 - Exposicion de informacion', () => {

  it('Analizar cabeceras HTTP del servidor', () => {

    cy.request({
      url: 'https://juice-shop.herokuapp.com/',
      failOnStatusCode: false
    }).then((respuesta) => {

      // Verificar que recibimos una respuesta
      expect(respuesta.status).to.eq(200);

      // Examinar las cabeceras
      const headers = respuesta.headers;

      // Comprobar si expone informacion del servidor
      const servidor = headers['server'] || 'No expuesto';
      const tecnologia = headers['x-powered-by'] || 'No expuesto';

      // Mostrar resultados
      cy.log('Servidor: ' + servidor);
      cy.log('Tecnologia: ' + tecnologia);

      // Guardar evidencia
      cy.writeFile('cypress/evidencias/prueba3_resultado.json', {
        prueba: 'Exposicion de informacion',
        estadoHTTP: respuesta.status,
        servidor: servidor,
        tecnologia: tecnologia,
        resultado: servidor !== 'No expuesto' ||
                   tecnologia !== 'No expuesto'
          ? 'Confirmado: se divulgan datos tecnologicos'
          : 'No observado: no se divulgan estas cabeceras'
      });

      // Verificacion de ejecucion
      expect(headers).to.be.an('object');

    });

  });

});