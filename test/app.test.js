const { Builder, By, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("React App UI Tests", function () {
  this.timeout(20000);
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3001");
  });

  after(async () => {
    await driver.quit();
  });

  it("should load React app title", async () => {
    const title = await driver.getTitle();
    expect(title).to.contain("React");
  });

  it("should display Learn React link", async () => {
    const link = await driver.wait(
      until.elementLocated(By.linkText("Learn React")),
      10000
    );
    const text = await link.getText();
    expect(text).to.equal("Learn React");
  });
});
