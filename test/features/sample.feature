Feature: validation

  Scenario: validation
    Given I am webdriver page
    When get the title
    Then title should be matched