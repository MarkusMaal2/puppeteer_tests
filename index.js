import puppeteer from "puppeteer";
import * as assert from "assert";



const Test1 = async (page) => {
    // TEST 1: Tavalise otsingu sooritamine
    // 1.1 Küpsistega nõustumine - küpsistega nõustudes peaks veebilehe uuesti laadimisel aken mitte ilmuma
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
    // 1.2 Märksõnaga otsimine
    try {
        // Leiame üles otsinguvälja
        const element = await page.waitForSelector('textarea');
        // Sisestame märksõna "Puppeteer" ja vajutame sisestusklahvi
        await element.type("Puppeteer");
        await page.keyboard.press("Enter");
        // Kontrollime, et märksõna oleks veebilehe pealkirjas ja otsinguväljal
        const search = await page.waitForSelector('textarea', {
            visible: true,
        })
        await new Promise(r => setTimeout(r, 2000));
        const textValue = await page.evaluate(sb => sb.textContent, search);
        const pageTitle = await page.title();
        assert.equal(textValue, "Puppeteer")
        assert.equal(pageTitle, "Puppeteer - Google otsing")
        await page.goBack();
        await new Promise(r => setTimeout(r, 2000));
    } catch (err) {
        console.log(err);
    }
    // 1.3 Otsingu tulemuse avamine
    try {
        // Leiame üles otsinguvälja
        const element = await page.waitForSelector('textarea');
        // Sisestame märksõna "Puppeteer" ja vajutame sisestusklahvi
        await element.type("Puppeteer");
        await page.keyboard.press("Enter");
        await new Promise(r => setTimeout(r, 2000));
        // Kontrollime, et märksõna oleks veebilehe pealkirjas ja otsinguväljal
        const search = await page.waitForSelector('textarea', {
            visible: true,
        })
        const textValue = await page.evaluate(sb => sb.textContent, search);
        let pageTitle = await page.title();
        assert.equal(textValue, "Puppeteer")
        assert.equal(pageTitle, "Puppeteer - Google otsing")
        // Avame esimese tulemuse
        await page.keyboard.press("Tab")
        await page.keyboard.press("Enter");
        await page.keyboard.press("Enter");
        await new Promise(r => setTimeout(r, 2000));
        pageTitle = await page.title();
        // Veendume, et Googlet poleks mainitud lehe pealkirjas
        assert.notEqual(pageTitle, "Puppeteer - Google otsing");
        await page.goBack();
        await page.goBack();
    } catch (err) {
        console.log(err);
    }
}

const Test2 = async (page) => {
    // TEST 2: Pildiotsing
    // 2.1: Pildiotsingusse sisenemine
    try {
        // Külastame Google.ee lehte
        await page.goto("https://www.google.ee");
        // Leiame üles "Pildid" siselingi ja klõpsame seda
        const [picLink] = await page.$x("//a[contains(., 'Pildid')]");
        if (picLink) {
            await picLink.click();
        }
        // Veendume, et lehekülje pealkirjas oleks "Google pildid"
        await new Promise(r => setTimeout(r, 2000));
        const pageTitle = await page.title();
        assert.equal(pageTitle, "Google pildid");
    } catch (err) {
        console.log(err);
    }
}

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout)
    await Test1(page);
    await Test2(page);
// Sule brauser
    browser.close();
})();