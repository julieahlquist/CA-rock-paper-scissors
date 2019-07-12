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
  };
  async closeHomePage() {
    await this.browser.close() 
  };
  async pageHasTextContent(expectedContent) {
    const pageContent = await this.page.content()
    const actualContent = pageContent.match(expectedContent)[0]

    expect(actualContent).to.be.eq(expectedContent)
  };
  async clickOnButton(btnName) {
    const btnSelector = this.btnSelectorFromName(btnName.toLowerCase())
    await this.page.waitForSelector(btnSelector)
    await this.page.click(btnSelector)
  };
  btnSelectorFromName(btnName) {
    if (btnName === 'rock') {
      return '#rock'
    } else if (btnName === 'paper') {
        return '#paper'
    } else if (btnName === 'scissors') {
        return '#scissors'
      } else if (btnName === 'hide_1') {
        return '#hide1'
      } else if (btnName === 'hide_2') {
        return '#hide2'
    } else {
       `${btnName} button is not defined`
    }
  }
};
setWorldConstructor(RockPaperScissorsWorld);