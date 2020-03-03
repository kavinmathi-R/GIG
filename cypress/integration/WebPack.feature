Feature: Login

  Scenario: Login Validation

Given I am in the automation practice home page and i click sign in
When I enter valid cemail address and password
Then I should be able to login successfully