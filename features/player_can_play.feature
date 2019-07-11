Feature: Create game
  As a player
  In order to have fun
  I would like to play the game of rock, paper, scissors

  Scenario: Player can choose rock, paper or scissors
    Given I visit the site
    Then I should see 'Rock'
    When I click 'Rock' as player 1
    And I click 'Hide player 1'
    And I click 'Scissors' as player 2
    And I click 'Hide player 2'
    And I click 'Play!'