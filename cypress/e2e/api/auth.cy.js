/// <reference types="cypress"/>


describe('API - Auth', () => {
  it('CT01 - Gerar token com credenciais válidas', () => {
    cy.login().then((token) => {
      expect(token).to.be.a('string').and.not.be.empty;
    });
  });
});
