import Ajv from "ajv";
import contrato from "../../fixtures/contrato-booking-update-schema.json";

describe('Contrato - PUT /booking/:id', () => {

  const ajv = new Ajv({ allErrors: true });

  it('Validar schema do retorno ao atualizar reserva (PUT)', () => {

    const payload = {
      firstname: "Rodrigo",
      lastname: "Garcia",
      totalprice: 300,
      depositpaid: false,
      bookingdates: {
        checkin: "2026-01-01",
        checkout: "2026-01-05"
      },
      additionalneeds: "Lunch"
    };

    // 1) Criar reserva primeiro
    cy.request('POST', '/booking', payload).then(postResponse => {
      const id = postResponse.body.bookingid;

      // 2) Atualizar a reserva criada
      cy.request({
        method: 'PUT',
        url: `/booking/${id}`,
        auth: {
          username: "admin",
          password: "password123"
        },
        body: payload
      }).then(putResponse => {

        expect(putResponse.status).to.eq(200);

        const valid = ajv.validate(contrato, putResponse.body);

        if (!valid) {
          console.log("❌ Erros encontrados no contrato:");
          console.log(ajv.errors);
        }

        expect(valid, 'Contrato divergente do esperado').to.be.true;
      });
    });

  });

});
