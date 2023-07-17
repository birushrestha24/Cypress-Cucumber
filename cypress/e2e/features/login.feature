Feature: Login

@regression
Scenario: Verify the error message when user login with invalid credentials
    Given User is in login page
    When User enter invalid credentials
    And User click login button
    Then Error message is displayed

@smoke @regression
Scenario: Verify that user can login with valid credentials
   Given User is in login page
   When User enter valid credentials
   And User click login button
   Then Navigate to dashboard page