import {APP_ROUTES} from './../../src/app/config/app-routes.config';
import {APP_API} from './../../src/app/config/app-api.config';
describe('My First Test', () => {
  it('Visits the initial project page', () => {
    // intercepter l'appel http à l'api et on va remplacer les données par nos fixtures
    cy.intercept(APP_API.cv, {fixture: 'cvs'});
    cy.visit(APP_ROUTES.cv);
    cy.get("[data-cy='cvsList']");
    cy.get("[data-cy='cvCard']").should('not.exist');
    cy.get("[data-cy='cvsList']").children().first().click();
    cy.intercept(APP_API.cv + 1, { fixture: 'cv1' });
    cy.get("[data-cy='cvCardDetailsButton']").click({ force: true });
  });
});
