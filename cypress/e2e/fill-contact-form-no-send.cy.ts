import ContactFormPage from '../support/pages/contact-form.page';
import NavigationPage from '../support/pages/navigation.page';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

//to implement as it should be implemented
type ContactFormData = {
    firstName: string;
    lastName: string;
    yourBusinessEmail: string;
    mobilePhoneNumber: number;
    yourOrganization: string;
    countryRegion: any;
    descriptionField: string;
    marketingCheckbox: any;
};

const filledData: ContactFormData = {
    firstName: 'Michal',
    lastName: 'Kmiecik',
    yourBusinessEmail: 'michal.kmiecik@mostly.com',
    mobilePhoneNumber: 48696166724,
    yourOrganization: 'maybeMostly',
    countryRegion: 'Poland',
    descriptionField: 'nothing',
    marketingCheckbox: true,
};

describe('Fill contact form and no send it', () => {
    before(() => {
        cy.fixture('bookmarks-main.json').as('bookmarks');
        cy.visit('');
        cy.acceptPrivacyPreferences();
    });
    it('should verify all the contact form fields and hover over send button', () => {
        NavigationPage.openContactForm();
        ContactFormPage.fillContactForm(filledData);
        ContactFormPage.hoverOverSendButton();
    });
});
