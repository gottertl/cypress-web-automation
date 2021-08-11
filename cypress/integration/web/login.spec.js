/// <reference types="cypress" />

import LoginPage from '../../pages/LoginPage'
import HomePage from '../../pages/HomePage'

describe('Login', () => {

    let loginPage = new LoginPage()
    let homePage = new HomePage()

    beforeEach(() => {
        homePage.visit()
        homePage.goToLoginPage()
    })

    it('should show an error message on empty login input', () => {
        loginPage.loginWithEmail(' ')
        loginPage.getAlertMessage().should('contain', 'Enter your email or mobile phone number')
    })

    it('should show an error message on unregistered email input', () => {
        loginPage.loginWithEmail('invalidemail')
        loginPage.getAlertContent().should('contain', 'We cannot find an account with that email address')
    })
})