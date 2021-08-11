import ProductPage from "./ProductPage"

class SearchPage {
    constructor() { }

    getFirstResult() { return cy.get('.a-section > .s-image') }

    enterFirstResult() {
        this.getFirstResult().click()
        return new ProductPage()
    }


}

export default SearchPage