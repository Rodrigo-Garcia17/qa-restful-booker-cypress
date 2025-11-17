import Ajv from "ajv";
import contrato from "../../fixtures/contrato-booking-post-schema.json";

describe('Contrato - POST /booking', () => {

  const ajv = new Ajv({ allErrors: true });

  it('Validar schema do retorno ao criar reserva', () => {

    const payload = {
      firstname: "Rodrigo",
      lastname: "Garcia",
      totalprice: 250,
      depositpaid: true,
      bookingdates: {
        checkin: "2025-12-01",
        checkout: "2025-12-10"
      },
      additionalneeds: "Breakfast"
    };

    cy.request('POST', '/booking', payload).then(response => {

      expect(response.status).to.eq(200);

      const valid = ajv.validate(contrato, response.body);

      if (!valid) {
        console.log("❌ Erros encontrados no contrato:");
        console.log(ajv.errors);
      }

      expect(valid, 'Contrato divergente do esperado').to.be.true;
    });

  });
});
