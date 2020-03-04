// <reference types="Cypress" />

import myAssertion from "./myAssertion";

const {
  Given,
  when,
  Then
} = require("cypress-cucumber-preprocessor/steps");
Given('I am in the automation practice home page and i serach for black dresses',()=>{

    cy.visit("www.automationpractice.com");
    cy.get('#search_query_top').type('Black dress');    //Searching for Black dress
    cy.screenshot();
    cy.get('#searchbox > .btn').click();
  
  })
  
  when('I select the first two black dresses and increase the quantity of second dress and I remove the first dress form the cart',()=>{
  
   cy.get('.ajax_add_to_cart_button[data-id-product="5"]').click();     //Adding first black dress in the cart
   cy.get('.continue > span').click();
   cy.get('.ajax_add_to_cart_button[data-id-product="4"]').click();     //Adding second black dress in the cart
   cy.get('.btn-default[title = "Proceed to checkout" ]').click();      
   cy.get('[name="quantity_4_16_0_0"],[value="3"]').clear().type('2');    //Increasing the quantity of First balck dress
   cy.get('#cart_quantity_down_5_19_0_0 ').click();                       //Reducing the qantity of first dress
   cy.screenshot();
  })
  
  
    
    
  Then('I should be able to proceed to checkout page',()=>{
   cy.get('.cart_navigation > .button > span').click();
    cy.screenshot();
    myAssertion();
    cy.get('.page-heading').should('contain','Authentication');
  
  })
