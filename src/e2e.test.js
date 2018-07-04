import puppeteer from 'puppeteer';

const appUrlBase = 'http://localhost:3000';

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({})
  page = await browser.newPage()
})

describe('Restaurants', () => {
  test('Heading', async () => {
    await page.goto(`${appUrlBase}/`)
    await page.waitForSelector('h1')
    const result = await page.evaluate(() => {
      return document.querySelector('h1').innerText
    })

    expect(result).toEqual('Restaurant Finder')
  })
})

afterAll(() => {
  browser.close()
})
