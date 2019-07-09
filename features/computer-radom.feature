Feature: Randomize computer's choice
  As a player
  In order to win or loose
  I would like to play against a computer

Scenario: Play the game against a computer
  Given I visit the site
  Then I should see "Opponent"
  When I click "Opponent"
  Then I should see "Opponent chose ..."
