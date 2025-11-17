import Ajv from "ajv";
import contrato from "../../fixtures/contrato-booking-detalhado-schema.json";

describe('Contrato - GET /booking/:id', () => {

  const ajv = new Ajv({ allErrors: true });

  it('Validar schema do retorno de uma reserva específica', () => {

    cy.request('/booking').then(lista => {

      const id = lista.body[0].bookingid;

      cy.request(`/booking/${id}`).then(resposta => {

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
});
