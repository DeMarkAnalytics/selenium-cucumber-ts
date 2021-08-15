Feature: navigation
  Scenario: open a site
    Given I navigate to "http://the-internet.herokuapp.com/"

  Scenario: back and forward button
    Given I navigate to "http://the-internet.herokuapp.com/"
    And I click on link having text "Inputs"
    When I navigate back
    And I navigate forward

  Scenario: close browser
    Given I navigate to "http://the-internet.herokuapp.com/"
    And I close browser
    
  Scenario: resize browser and maximize browser
    Given I navigate to "http://the-internet.herokuapp.com/"
    Then I resize browser window size to width 800 and height 600
    And I maximize browser window

  Scenario: refresh the page
    Given I navigate to "http://the-internet.herokuapp.com/"
    Then I refresh page