# RPS Challenge - week 3-5
## Summary
This is an individual 2 week spanning project aiming to create an simple game of the rock, paper, scissors game, and is supposed to be played by two players from one computer.
______________
## Setting up
### Installing
1. Install yarn as package manager:
- Read [official documentation](https://yarnpkg.com/en/docs/install) and run. Don't forget to add .node_modules to your .gitignore.
````
$ yarn init
`````

### Scrips
- Add following scripts to your package.json:
`````
"scripts": {
    "cucumber":
      "superstatic -p 3000 2> /dev/null & cucumber-js; lsof -ti tcp:3000 | xargs kill"
}
`````

__________
### Testing - Cucumber
- In order to test the code in a BDD way, Cucumber has been used for this project. 
`````
$ yarn add cucumber chai puppeteer superstatic --dev
``````

____________
### Ackknowledgements
Thank you to [Craft Academy](https://craftacademy.se/) in Stockholm, Sweden for crafting this challenge.