import { selectors } from '../selectors/base-selectors';

export default class NavigationPage {
    public static checkBookmarkLinks(bookmarks: any) {
        cy.get(bookmarks).each(bookmark => {
            cy.get(selectors.desktopNavLink)
                // @ts-ignore -- to correct types, e.g. using interface
                .eq(bookmark.eq)
                .find(selectors.dropdownLink)
                // @ts-ignore -- to correct types, e.g. using interface
                .contains(bookmark.name)
                .and('be.visible');
        });
    }
    public static openContactForm() {
        cy.get(selectors.desktopNavLink)
            .contains('Company')
            .trigger('mouseover');
        cy.get(selectors.navigationSecondaryLinkSelector)
            .contains('Contact')
            .click();
        cy.url().should('contain', 'contact');
    }
}
