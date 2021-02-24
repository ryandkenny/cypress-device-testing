Feature: Testing cucumber cypress integration

  Scenario: Navigate to Home Office and search
    Given I hit the https://www.gov.uk/government/organisations/home-office url
    And I click the search button
    Then The header is 'Search GOV.UK'
