Feature: website assertions
  @assertion @pageTitle
  Scenario: Checking page title
    Given I navigate to "http://the-internet.herokuapp.com"
    Then I should see the page title as "The Internet"
    And I should see page title as "The Internet"
    And I should not see the page title as "Something Else"
    And I should not see page title as "Something Else"
    And I should see the page title having partial text as "The"
    And I should see page title having partial text as "Internet"
    And I should not see the page title having partial text as "Something"
    And I should not see page title having partial text as "Else"

  @assertion @elementText
  Scenario: locating items
    Given I navigate to "http://the-internet.herokuapp.com/add_remove_elements/"
    Then button having xpath "//button[text()='Add Element']" should have text as "Add Element"
    Then button having xpath "//button[text()='Add Element']" should not have text as "Remove Element"