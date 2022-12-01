import SearchPage from '../support/pages/search.page';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Search with no results', () => {
    before(() => {
        cy.visit('');
        cy.acceptPrivacyPreferences();
    });
    it('should use search engine with the data that shows no results', function () {
        SearchPage.searchForText('sythetic');
        SearchPage.checkSearchResults('sythetic', false);
    });
});