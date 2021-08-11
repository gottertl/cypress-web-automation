/// <reference types="cypress" />

import HomePage from '../../pages/HomePage'


describe('Product', () => {
    let homePage = new HomePage()
    beforeEach(() => {
        homePage.visit()
    })

    it('should visit the product page for the first search result', () => {
        let searchPage = homePage.searchFor('alexa')
        let productPage = searchPage.enterFirstResult()
        productPage.getProductTitle().should('exist')
    })
})