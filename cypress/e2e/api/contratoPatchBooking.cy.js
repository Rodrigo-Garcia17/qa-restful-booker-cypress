import Ajv from "ajv";
import contrato from "../../fixtures/contrato-booking-update-schema.json";

describe('Contrato - PATCH /booking/:id', () => {

  const ajv = new Ajv({ allErrors: true });

  it('Validar schema do retorno ao atualizar reserva (PATCH)', () => {

    const createPayload = {
      firstname: "Rodrigo",
      lastname: "Garcia",
      totalprice: 200,
      depositpaid: true,
      bookingdates: {
        checkin: "2026-02-01",
        checkout: "2026-02-10"
      },
      additionalneeds: "Breakfast"
    };

    const updatePayload = {
      firstname: "R. Garcia"
    };

    cy.request('POST', '/booking', createPayload).then(postResponse => {
      const id = postResponse.body.bookingid;

      cy.request({
        method: 'PATCH',
        url: `/booking/${id}`,
        auth: {
          username: "admin",
          password: "password123"
        },
        body: updatePayload
      }).then(patchResponse => {

        expect(patchResponse.status).to.eq(200);

        const valid = ajv.validate(contrato, patchResponse.body);

        if (!valid) {
          console.log("❌ Erros encontrados no contrato:");
          console.log(ajv.errors);
        }

        expect(valid, 'Contrato divergente do esperado').to.be.true;
      });
    });

  });

});
