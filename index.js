import puppeteer from "puppeteer";

(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({headless: false});

   await browser.close();
})();