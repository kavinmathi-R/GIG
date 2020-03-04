Feature: Validation
Scenario: Add black dreses in the cart

Given I am in the automation practice home page and i serach for black dresses
When I select the first two black dresses and increase the quantity of second dress and I remove the first dress form the cart
Then I should be able to proceed to checkout page