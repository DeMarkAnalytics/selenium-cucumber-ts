@click
Feature: Clicking on elements
  @click-link
  Scenario: I click on a link
    Given I navigate to "http://the-internet.herokuapp.com/"
    When I click on link having text "Checkboxes"
    Then element having id "checkboxes" should be present

  @click-button
  Scenario: I click on a button
    Given I navigate to "http://the-internet.herokuapp.com/add_remove_elements/"
    When I click on button having xpath "//button[text()='Add Element']"
    Then element having class "added-manually" should be present

  @click-checkbox
  Scenario: I click on a checkbox
    Given I navigate to "http://the-internet.herokuapp.com/checkboxes"
    When I click on element having xpath "//input[@type='checkbox'][1]"
    Then element having xpath "//input[@type='checkbox'][1]" should have attribute "checked" with value "true"

  @right-click
  Scenario: I right click on an element
    Given I navigate to "http://the-internet.herokuapp.com/context_menu"
    When I right click on element having id "hot-spot"
    Then I should see alert text as "You selected a context menu"

  @drag-drop
  Scenario: I drag an item and dop it on another
    Given I navigate to "http://the-internet.herokuapp.com/drag_and_drop"
    And element having id "column-a" should have text as "A"
    And element having id "column-b" should have text as "B"
    When I drag element having id "column-a" and drop it on element having id "column-b"
    Then element having id "column-a" should have text as "B"
    And element having id "column-b" should have text as "A"