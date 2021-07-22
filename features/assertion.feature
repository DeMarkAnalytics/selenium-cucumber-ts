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
    Given I navigate to "http://the-internet.herokuapp.com/challenging_dom"
    Then element having id "e4c97690-c640-0139-01e5-3afd003b8732" should have text as "foo"
    Then element having id "e4c97690-c640-0139-01e5-3afd003b8732" should not have text as "qux"
    Then element having class "button" should have text as "foo"
    Then element having class "button" should not have text as "qux"
