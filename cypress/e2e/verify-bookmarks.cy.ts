import NavigationPage from '../support/pages/navigation.page';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Verify bookmarks', () => {
    before(() => {
        cy.fixture('bookmarks-main.json').as('bookmarks');
        cy.visit('');
        cy.acceptPrivacyPreferences();
    });
    it('should verify that bookmarks matches expected ones', function () {
        const bookmarks = this.bookmarks;
        NavigationPage.checkBookmarkLinks(bookmarks);
    });
});