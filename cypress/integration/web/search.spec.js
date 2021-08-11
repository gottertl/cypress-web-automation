/// <reference types="cypress" />

import HomePage from '../../pages/HomePage'

context('Search', () => {
    beforeEach(() => {
        new HomePage().visit()
    })

    it('should list results for the searched term', () => {
        let homePage = new HomePage()
        let searchPage = homePage.searchFor('alexa')
        searchPage.getFirstResult().should('exist')
    })
})