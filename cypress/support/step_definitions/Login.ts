/// <reference types="Cypress" />

import myAssertion from "./myAssertion";

const {
  Given,
  when,
  Then
} = require("cypress-cucumber-preprocessor/steps");

Given(`I am in the automation practice home page and i click sign in`, () => {
  cy.visit("www.automationpractice.com");
  cy.get(".login[title='Log in to your customer account']").click();
  cy.screenshot();
});

when('I enter valid cemail address and password',()=> {
  cy.get("#email").type("AutomationDemo@gmail.com");
    cy.get("#passwd").type("Demo2103");
    cy.get('#SubmitLogin > span').click();
    cy.screenshot();
});

Then(`I should be able to login successfully`, () => {
  myAssertion();
  cy.get('.page-heading').should('contain','My account');
  cy.screenshot();
});

