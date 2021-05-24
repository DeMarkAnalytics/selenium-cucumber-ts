Feature: bdd tests for step defs
    @stepdeftest
    Scenario: page title assertions
        Given I navigate to "https://apple.com"
        Then I should see page title as "Apple"
        Then I should not see page title as "App"
        Then I should not see page title as "Google"
        Then I should see page title having partial text as "App"
        Then I should not see page title having partial text as "Fa"
        Then element having class "ac-gn-link ac-gn-link-mac" should have text as "Mac"
        Then element having class "ac-gn-link ac-gn-link-mac" should not have text as "Advertising"
        Then element having id "ac-globalnav" should have attribute "role" with value "navigation"
        Then element having id "ac-globalnav" should not have attribute "nothing" with value "novalue"
        Then element having id "ac-gn-searchform-submit" should be disabled
        Then element having id "ac-gn-searchform-submit" should not be enabled
        Then element having id "viewport-emitter" should be enabled
        Then element having id "viewport-emitter" should not be disabled
        Then element having id "ac-globalnav" should be present
        Then checkbox having id "ac-gn-menustate" should be unchecked
        Then link having text "Buy" should be present
        #Then link having text "Google" should not be present
        Then I click on link having text "iPhone"
        And I should see page title as "iPhone - Apple"
        And I should wait for "30" seconds