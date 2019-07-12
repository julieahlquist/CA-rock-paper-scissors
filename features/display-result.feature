Feature: Display result
  As a player
  In order to have know who won
  I would like to see the outcome of the throws

  Scenario: Players can see who won
    Given I click 'Rock' as player 1
    And I click 'Hide player 1'
    And I click 'Scissors' as player 2
    And I click 'Hide player 2'
    When I click 'Play!'
    Then I should see 'Player 1 wins!'