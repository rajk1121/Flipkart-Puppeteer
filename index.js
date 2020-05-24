const puppeteer = require('puppeteer');
let pincode = '110045';
let URL = 'https://www.flipkart.com/realme-x2-pearl-green-64-gb/p/itm75023903eb431';
async function initialize() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(URL, { waitUntil: 'networkidle2' });
    await page.type('input[id="pincodeInputId"]', pincode, { delay: 500 });
    await page.evaluate(() => document.querySelector("._2aK_gu").click());
    await page.waitForSelector("._13J5uS")
    const text = await page.evaluate(() => {
        return document.querySelector("._13J5uS").textContent;
    })
    if (text === 'Currently out of stock in this area.') {
        console.log('Out of Stock');
    } else {
        console.log('In Stock');
    }

}
initialize();