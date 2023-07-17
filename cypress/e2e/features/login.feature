Feature: Login

@smoke
Scenario: Verify the error message when user login with invalid credentials
    Given User is in login page
    When User enter invalid credentials
    And User click login button
    Then Error message is displayed

@regression
Scenario: Verify the error message when user login with invalid credentials
    Given User is in login page
    When User enter invalid credentials
    And User click login button
    Then Error message is displayed