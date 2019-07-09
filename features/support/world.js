const { setWorldConstructor } = require('cucumber')
const { expect } = require('chai')
const puppeteer = require('puppeteer')

const HOME_PAGE = 'http://localhost:3000'

class RockPaperScissorsWorld {
  constructor() {}

  async openHomePage() {
    this.browser = await puppeteer.launch({headless: false, slowmo: 100})
    this.page = await this.browser.newPage()
    await this.page.goto(HOME_PAGE)
  }
  async closeHomePage() {
    await this.browser.close() 
  }
  async pageHasTextContent(expectedContent) {
    const pageContent = await this.page.content()
    const actualContent = pageContent.match(expectedContent)[0]

    expect(actualContent).to.be.eq(expectedContent)
  }
  async clickOnButton(btnChoice) {
    const btnSelector = this.btnSelectorFromChoice(btnChoice.toLowerCase())
    await this.page.waitForSelector(btnSelector)
    await this.page.click(btnSelector)
  }
  btnSelectorFromChoice(btnChoice) {
    switch (btnChoice) {
      case 'rock':
        return '.rock'
        break
      case 'paper':
        return '.paper'
        break
      case 'scissors':
        return '.scissors'
        break
      case 'opponent':
        return '.opponent'
        break
    }
  }
}

setWorldConstructor(RockPaperScissorsWorld)