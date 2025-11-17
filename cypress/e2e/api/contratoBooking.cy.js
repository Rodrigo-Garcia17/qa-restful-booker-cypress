import Ajv from "ajv";
import contrato from "../../fixtures/contrato-booking-schema.json";

describe('Contrato - GET /booking', () => {

  const ajv = new Ajv({ allErrors: true });

  it('Validar schema da lista de bookings', () => {
    cy.request('/booking').then(resposta => {

      expect(resposta.status).to.eq(200);

      const valid = ajv.validate(contrato, resposta.body);

      if (!valid) {
        console.log("❌ Erros encontrados no contrato:");
        console.log(ajv.errors);
      }

      expect(valid, 'Contrato divergente do esperado').to.be.true;
    });
  });

});
