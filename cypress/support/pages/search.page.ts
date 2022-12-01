import { selectors } from '../selectors/searchSelectors';

export default class SearchPage {
    public static searchForText(text: string) {
        cy.get(selectors.headerSearchButton).click();
        cy.get(selectors.searchInput).type(`${text}{enter}`);
    }
    public static checkSearchResults(
        searchText: string,
        expectResultsPositive: boolean
    ) {
        let searchHeadline =
            expectResultsPositive === true
                ? 'Search results for:'
                : 'Sorry, no results for:';
        cy.get(selectors.searchResultsHeadline).contains(searchHeadline);
        cy.get(selectors.searchResultsCheckedPhraze).contains(searchText);
    }
}
