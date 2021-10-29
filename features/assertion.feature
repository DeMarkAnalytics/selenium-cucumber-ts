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
    Then button having xpath "//button[text()='Add Element']" should have partial text as "Add"
    Then button having xpath "//button[text()='Add Element']" should not have partial text as "Remove"

  #@assertion @attributes
  #Scenario: element attributes
  #  Given I navigate to "http://the-internet.herokuapp.com/login"
  #  Then element having id "username" should have attribute "name" with value "username"
  #  And element having id "password" should not have attribute "name" with value "username"
  #  And button having class "radius" should have attribute "type" with value "submit"

  @assertion @presence
  Scenario: element presence
    Given I navigate to "http://the-internet.herokuapp.com/inputs"
    Then element having xpath "//div[@class='example']/input" should be present

  @assertion @checkboxes
  Scenario: check boxes
    Given I navigate to "http://the-internet.herokuapp.com/checkboxes"
    Then checkbox having xpath "(//form[@id='checkboxes']//input)[1]" should be unchecked
    Then checkbox having xpath "(//form[@id='checkboxes']//input)[2]" should be checked

  #@assertion @radioButtons @disabled @pending
  #Scenario: radio buttons
    #Given I navigate to "?"
    #Then radio button having xpath "//??" should be selected
    #Then radio button having xpath "//??" should be unselected
    #Then option "?" by ? from radio buttong group having xpath "?" should be selected
    #Then option "?" by ? from radio buttong group having xpath "?" should be unselected

  @assertion @alerts
  Scenario: javascript alert
    Given I navigate to "http://the-internet.herokuapp.com/javascript_alerts"
    When I click on button having xpath "//button[text()='Click for JS Alert']"
    Then I should see alert text as "I am a JS Alert"

  #@assertion @dropdowns
  #Scenario: dropdown list
  #  Given I navigate to "http://the-internet.herokuapp.com/dropdown"
  #  And I should wait for "5" seconds
  #  When I select 1 option by value from dropdown having id "dropdown"
  #  And I should wait for "5" seconds
  #  Then option "1" by value from dropdown having id "dropdown" should be selected
  #  Then option "2" by value from dropdown having id "dropdown" should be unselected
  #  And I should wait for "5" seconds
  #  Then option "Option 1" by value from dropdown having id "dropdown" should be selected
  #  And I should wait for "5" seconds
  #  Then option "Option 2" by value from dropdown having id "dropdown" should be unselected
  #  And I should wait for "5" seconds
