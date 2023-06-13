import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pages/loginPage';

const loginPage = new LoginPage();

  Given('User is in login page', () => {
    cy.viewport(1080, 920)
    cy.visit('https://opensource-demo.orangehrmlive.com/')
  });

  When('User enter invalid credentials', () => {
    loginPage.enterUsername('sdkfjsd')
    loginPage.enterPassword('shdfkja')
  });
  
  When('User click login button', () => {
    loginPage.clickLoginButton()
  });
  
  Then('Error message is displayed', () => {
    cy.get('p[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text', 'Invalid credentials')
    //loginPage.getAlertMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  });
  
