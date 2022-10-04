Feature: check progress
  Scenario: waiting for something
    Given I navigate to "http://the-internet.herokuapp.com/"
    And I should wait for "2" seconds

  Scenario: waiting for element to show up
    Given I navigate to "http://the-internet.herokuapp.com/dynamic_controls"
    When I click on button having xpath "//button[text()='Remove']"
    Then I wait 10 seconds for element having xpath "//button[text()='Add']" to be located
    And I wait 10 seconds for element having xpath "//button[text()='Add']" to display
