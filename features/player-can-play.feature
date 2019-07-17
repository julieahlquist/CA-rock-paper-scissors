Feature: Create game
  As a player
  In order to have fun
  I would like to play the game of rock, paper, scissors

  Scenario: Player can choose rock, paper or scissors
    Given I visit the site
    Then I should see 'Rock'
    When I fill 'Rock' as player 1
    And I fill 'Scissors' as player 2
    And I click 'Hide player 1'
    Then I should see 'Is it a winning move'
    And I click 'Hide player 2'
    Then I should see 'Time to hit Play!'
    And I click 'Play!'
    Then I should see 'Player 1 wins!'