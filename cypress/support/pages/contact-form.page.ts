import { selectors } from '../selectors/contact-form-selectors';

export default class ContactFormPage {
    public static fillContactForm(contactFormData) {
        //to figure out why it tooks so long
        //to handle spinner instead of below wait
        cy.wait(7000);
        cy.get(selectors.askFormHeader).should('be.visible').rightclick();
        cy.get(selectors.firstName).type(contactFormData.firstName);
        cy.get(selectors.lastName).type(contactFormData.lastName);
        //of course validate is needed, but not in this simple test
        // to be checked in separate tests: business emails (no gmails), wrong data and so on
        cy.get(selectors.yourBusinessEmail).type(
            contactFormData.yourBusinessEmail
        );
        //of course validate is needed, but not in this simple test
        cy.get(selectors.mobilePhoneNumber).type(
            contactFormData.mobilePhoneNumber
        );
        cy.get(selectors.yourOrganization).type(
            contactFormData.yourOrganization
        );
        cy.get(selectors.countryRegion).select(contactFormData.countryRegion);
        cy.get(selectors.descriptionField)
            .click()
            .type(contactFormData.descriptionField, { delay: 50})
        cy.get(selectors.marketingCheckbox).check();
    }
    public static hoverOverSendButton() {
        cy.get(selectors.sendMessageButtonInput).trigger('mouseover');
    }
}
