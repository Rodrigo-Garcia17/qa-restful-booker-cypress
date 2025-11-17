describe('Contrato - DELETE /booking/:id', () => {

  it('Excluir reserva e validar que não pode mais ser consultada', () => {

    const payload = {
      firstname: "Rodrigo",
      lastname: "Garcia",
      totalprice: 150,
      depositpaid: true,
      bookingdates: {
        checkin: "2026-03-01",
        checkout: "2026-03-05"
      },
      additionalneeds: "Dinner"
    };

    // 1) Criar reserva para depois excluir
    cy.request('POST', '/booking', payload).then(postResponse => {

      const id = postResponse.body.bookingid;

      // 2) Excluir reserva criada
      cy.request({
        method: 'DELETE',
        url: `/booking/${id}`,
        auth: {
          username: "admin",
          password: "password123"
        }
      }).then(deleteResponse => {

        expect(deleteResponse.status).to.be.oneOf([200, 201]);

        // 3) Consultar e validar que não existe mais
        cy.request({
          method: 'GET',
          url: `/booking/${id}`,
          failOnStatusCode: false
        }).then(getResponse => {

          expect(getResponse.status).to.eq(404);

        });

      });
    });

  });

});
