Feature: Clicking on elements
  Scenario: I click on a link
    Given I navigate to "http://the-internet.herokuapp.com/"
    When I click on link having text "Checkboxes"
    Then element having id "checkboxes" should be present

  Scenario: I click on a button
    Given I navigate to "http://the-internet.herokuapp.com/add_remove_elements/"
    When I click on button having xpath "//button[text()='Add Element']"
    Then element having class "added-manually" should be present