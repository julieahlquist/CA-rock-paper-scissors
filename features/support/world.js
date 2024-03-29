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
    switch (btnName) {
      case 'rock':
        return '#p1rock'
        break
      case 'paper':
        return '#p1paper'
        break
      case 'scissors':
        return '#p1scissors'
        break
        case 'rock':
          return '#p2rock'
          break
        case 'paper':
          return '#p2paper'
          break
        case 'scissors':
          return '#p2scissors'
          break
      case 'hide player 1':
        return '#hide1'
        break
      case 'hide player 2':
        return '#hide2'
        break
      case 'play!':
        return '#play'
        break
        case 'new game':
          return '#refresh'
          break
      default:
        throw `${btnName} button is not defined`
        break
    }
  }
};
setWorldConstructor(RockPaperScissorsWorld);