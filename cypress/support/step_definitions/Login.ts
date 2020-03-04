/// <reference types="Cypress" />

import myAssertion from "./myAssertion";

const {
  Given,
  when,
  Then
} = require("cypress-cucumber-preprocessor/steps");

Given(`I am in the automation practice home page and i click sign in`, () => {
  cy.visit("www.automationpractice.com");                                   //Navigate to the URL
  cy.get(".login[title='Log in to your customer account']").click();        //Click on Signin
  cy.screenshot();
});

when('I enter valid cemail address and password',()=> {
  cy.get("#email").type("AutomationDemo@gmail.com");                      //Enter the appropriate email address
    cy.get("#passwd").type("Demo2103");                                   //Enter the valid pwassword
    cy.get('#SubmitLogin > span').click();
    cy.screenshot();
});

Then(`I should be able to login successfully`, () => {
  myAssertion();
  cy.get('.page-heading').should('contain','My account');                 //Validating whether the customer is logged in successfully 
  cy.screenshot();
});

