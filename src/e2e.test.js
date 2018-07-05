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
    await page.waitForSelector('.restaurants')
    const restaurants = await page.evaluate(() => {
      return [...document.querySelectorAll('.restaurant .name')].map(el => el.innerText)
    })

    expect(restaurants.length).toEqual(2)
  })
})

afterAll(() => {
  browser.close()
})
