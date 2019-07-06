Feature: Create game
  As a player
  In order to have fun
  I would like to play the game of rock, paper, scissors


  Scenario: Play the game against a computer
    Given I visit the site
    Then I should see "Rock"
    And I should see "Paper"
    And I should see "Scissors"
    