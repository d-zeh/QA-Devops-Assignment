const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});


describe("Danny made: Duel Duo tests", () => {
  test("Clicking Draw button populates Cards on screen", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    await driver.wait(until.elementLocated(By.id("choices")));
    
    await driver.wait(until.elementsLocated(By.css('.bot-card')), 5000);
    const cards = await driver.findElements(By.css('.bot-card'));

    expect(cards.length).toBe(5);
  });

  test("Can add cards to player hand", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    await driver.wait(until.elementLocated(By.id("choices")));
    
    await driver.wait(until.elementsLocated(By.css('.bot-card')), 5000);

    await driver.findElement(By.css('.bot-btn')).click();
    await driver.findElement(By.css('.bot-btn')).click();
    
    await driver.wait(until.elementsLocated(By.css('.bot-card')), 5000);
    const ATTACKcards = await driver.findElements(By.css('#player-duo .bot-card'))
    expect(ATTACKcards.length).toBe(2);
  });


});

