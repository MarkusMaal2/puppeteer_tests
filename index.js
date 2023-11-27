import puppeteer from "puppeteer";
import * as assert from "assert";
(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout)

    // TEST 1: Tavalise otsingu sooritamine
        // 1. Küpsistega nõustumine - küpsistega nõustudes peaks veebilehe uuesti laadimisel aken mitte ilmuma
        try {
            // Läheme Google.ee lehele
            await page.goto("https://www.google.ee");
            // Leiame "Nõustu kõigiga" nupu
            for (let i = 0; i < 4; i++) { await page.keyboard.press("Tab") }
            const acceptId = await page.evaluate(() => "#" + document.activeElement.id)
            const acceptButton = await page.evaluateHandle(() => document.activeElement);
            await page.keyboard.press("Enter")
            await acceptButton.isHidden();
            // veendume, et küpsiste aken pole nähtav
            await page.waitForSelector(acceptId, {
                hidden: true,
            })
            // laadi leht uuesti
            await page.reload()
            // veendume, et küpsiste aken pole nähtav
            for (let i = 0; i < 4; i++) { await page.keyboard.press("Tab") }
            await page.waitForSelector(acceptId, {
                hidden: true,
            })
        } catch (err) {
            console.log(err);
        }
        // Märksõnaga otsimine
        try {
            const element = await page.waitForSelector('textarea');
            await element.type("Puppeteer");
            await page.keyboard.press("Enter");
        } catch (err) {
            console.log(err);
        }

})();