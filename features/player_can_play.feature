Feature: Create game
  As a player
  In order to have fun
  I would like to play the game of rock, paper, scissors

  Scenario: Player can choose rock, paper or scissors
    Given I visit the site
    Then I should see "Rock"
    And I should see "Paper"
    And I should see "Scissors"
    When I click "Foo"
    And I click "Play!"