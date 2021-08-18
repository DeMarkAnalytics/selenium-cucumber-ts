Feature: inputs
  Scenario: I input text
    Given I navigate to "http://the-internet.herokuapp.com/inputs"
    Then I enter "1" into input field having xpath "//input[@type='number']"


  Scenario: clear input
    Given I navigate to "http://the-internet.herokuapp.com/inputs"
    Then I enter "1" into input field having xpath "//input[@type='number']"
    Then I clear input field having xpath "//input[@type='number']"