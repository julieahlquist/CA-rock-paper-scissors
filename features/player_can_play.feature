Feature: Create game
  As a player
  In order to have fun
  I would like to play the game of rock, paper, scissors

  Scenario: Player can choose rock, paper or scissors
    Given I visit the site
    Then I should see "Rock"
    And I should see "Paper"
    And I should see "Scissors"
    When I click "Rock"
    Then I should see "You clicked rock"
    When I click "Paper"
    Then I should see "You clicked paper"
    When I click "Scissors"
    Then I should see "You clicked scissors"