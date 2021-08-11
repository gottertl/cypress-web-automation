import SearchPage from "./SearchPage"

class HomePage {
    constructor() { }

    visit() {
        cy.visit('/')
    }

    getSignInLink() { return cy.get('a#nav-link-accountList') }
    searchTextbox() { return cy.get('input#twotabsearchtextbox') }
    searchButton()  { return cy.get('input#nav-search-submit-button') }


    goToLoginPage() {
        this.getSignInLink().click()
    }

    searchFor(searchTerm) {
        this.searchTextbox().clear().type(searchTerm)
        this.searchButton().click()
        return new SearchPage()
    }
}

export default HomePage