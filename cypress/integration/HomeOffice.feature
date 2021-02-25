Feature: Testing cucumber cypress integration

  Background: Set the device to be used for testing
    Given I set the device for testing

  Scenario: Navigate to Home Office and search
    Given I hit the https://www.gov.uk/government/organisations/home-office url
    And I click the search button
    Then The header is 'Search GOV.UK'
