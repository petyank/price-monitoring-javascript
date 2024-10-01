Feature: Acccept Terms and Conditions

    Scenario: Accept the Terms and Conditions
        Given The terms and conditions consent is requested
        When I accept the terms and conditions
        Then the terms and conditions form disappears

        Examples: