/// <reference types="cypress"/>

describe('Booking CRUD - API Restful Booker', () => {
    let token

    // 1️⃣ GERA TOKEN ANTES DE TODOS OS TESTES
    before(() => {
        cy.login().then(t => {
            token = t
            Cypress.env('token', t)
            cy.log('Token gerado:' + t)

        })
    })

    // 2️⃣ CRIA UMA RESERVA ANTES DE TODOS OS TESTES
    before(() => {

        const payload = {
            firstname: "Rodrigo",
            lastname: "Garcia",
            totalprice: 150,
            depositpaid: true,
            bookingdates: {
                checkin: "2025-11-10",
                checkout: "2025-11-15"
            },
            additionalneeds: "Breakfast"
        };

        cy.request({
            method: 'POST',
            url: '/booking',
            body: payload
        }).then((resposta) => {
            expect(resposta.status).to.equal(200)
            expect(resposta.body).to.have.property('bookingid')

            Cypress.env('bookingId', resposta.body.bookingid)
        })
    })

    // 3️⃣ CONSULTA A RESERVA CRIADA
    it('CT03 - Deve Consultar a reserva pelo ID', () => {

        const id = Cypress.env('bookingId')
        cy.log('Consultando ID: ' + id)

        cy.request({
            method: 'GET',
            url: `/booking/${id}`
        }).then((resposta) => {
            expect(resposta.status).to.equal(200)
            expect(resposta.body).to.include.keys(
                'firstname',
                'lastname',
                'totalprice',
                'depositpaid',
                'bookingdates'
            )
            cy.log('Reserva consulta com sucesso!')
        })
    })

    // 4️⃣ ATUALIZA A RESERVA
    it('CT04 - Deve atualizar a reserva', () => {
        const id = Cypress.env('bookingId')

        const updatePayload = {
            firstname: "Rodrigo",
            lastname: "Silva Atualizado",
            totalprice: 300,
            depositpaid: false,
            bookingdates: {
                checkin: "2025-12-01",
                checkout: "2025-12-10"
            },
            additionalneeds: "Dinner"
        }
        cy.request({
            method: 'PUT',
            url: `/booking/${id}`,
            headers: { Cookie: `token=${token}` },
            body: updatePayload
        }).then((resposta) => {
            expect(resposta.status).to.equal(200)
            expect(resposta.body.lastname).to.equal('Silva Atualizado')

            cy.log("Reserva atualizada com sucesso!")
        })
    })

    // 5️⃣ EXCLUI A RESERVA
        it('CT05 - Deve deletar a reserva', () => {
            const id = Cypress.env('bookingId')

            cy.request({
                method: 'DELETE',
                url: `/booking/${id}`,
                headers: { Cookie: `token=${token}`}
            }).then((resposta) => {
                expect(resposta.status).to.equal(201)
                cy.log("Reserva deletada com sucesso!");
            })
        })
})
