import { selectors } from "./selectors/base-selectors";

Cypress.Commands.add('acceptPrivacyPreferences', () => {
    //work around to not loose cookies... 
    //TODO figure out which cookie is related and set it properly not to waste the time
    cy.get('.ct-headline.has-decor.huge').rightclick();
    cy.get('#CookieBoxSaveButton').then($cookieButton => {
        if ($cookieButton.length > 0) {
            cy.get('#CookieBoxSaveButton').click();
        }
    });
});

// to avoid chainable type errors
export {};
declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            acceptPrivacyPreferences(): Chainable<void>;
            sayWrr(): Chainable<void>;
        }
    }
}
