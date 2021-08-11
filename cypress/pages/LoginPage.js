class LoginPage {
    constructor() {}

    getEmailField()   { return cy.get('input#ap_email') }
    getSubmitButton() { return cy.get('input#continue')}
    getAlertMessage() { return cy.get('.a-alert-content')}
    getAlertContent() { return cy.get('.a-alert-content') }


    loginWithEmail(email) {
        this.getEmailField().clear().type(email)
        this.getSubmitButton().click()
    }
}

export default LoginPage