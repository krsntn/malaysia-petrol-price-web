import puppeteer from 'puppeteer';

export const handler = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      protocolTimeout: 0,
    });
    const page = await browser.newPage();

    await page.goto('https://hargapetrol.my/malaysia-petrol-prices-list.html');
    await page.waitForSelector('.pricetable > span');

    const data = await page.evaluate(() => {
      const priceTable = document.querySelectorAll('.pricetable > span');

      const data = [];
      Array.from(priceTable).map(element => {
        const cur = {
          from: element.querySelector('.daterange[itemprop="validFrom"]')
            .innerText,
          through: element.querySelector('.daterange[itemprop="validThrough"]')
            .innerText,
          ron95: element.querySelector('.ron95').innerText,
          ron97: element.querySelector('.ron97').innerText,
          diesel: element.querySelector('.diesel').innerText,
        };

        data.push(cur);
      });
      return Promise.resolve(data);
    });

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    console.log('error', e);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'internal server error',
      }),
    };
  }
};
