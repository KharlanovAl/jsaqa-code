let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://netology.ru");
});

afterEach(async () => {
  await page.close();
});

describe("Netology.ru tests", () => {
  test("The first test", async () => {
    const title = await page.title();
    console.log("Page title: " + title);
    expect(title).toBeTruthy();
    
    const firstLink = await page.$("header a + a");
    expect(firstLink).toBeTruthy();
    
    const firstLinkText = await page.$eval(
      "header a + a",
      (link) => link.textContent
    );
    expect(firstLinkText).toBeTruthy();
    
    await firstLink.click();
    await page.waitForNavigation();
    
    const title2 = await page.title();
    console.log("Page title: " + title2);
    expect(title2).toBeTruthy();
    
    const pageList = await browser.newPage();
    await pageList.goto("https://netology.ru/navigation");
    await pageList.waitForSelector("h1");
    
    const h1Text = await pageList.$eval("h1", el => el.textContent);
    expect(h1Text).toBeTruthy();
    
    await pageList.close();
  });

  test("The first link text 'Медиа Нетологии'", async () => {
    const actual = await page.$eval("header a + a", (link) => link.textContent);
    expect(actual).toContain("Медиа Нетологии");
  });

  test("The first link leads on 'Медиа' page", async () => {
    await page.click("header a + a");
    await page.waitForSelector(".logo__media", {
      visible: true,
    });
    const actual = await page.$eval(".logo__media", (link) => link.textContent);
    expect(actual).toContain("Медиа");
  });

  // Дополнительные тесты для покрытия 100%
  test("Page should load successfully", async () => {
    const url = await page.url();
    expect(url).toBe("https://netology.ru/");
  });

  test("Header should exist", async () => {
    const header = await page.$("header");
    expect(header).toBeTruthy();
  });

  test("Navigation should contain links", async () => {
    const links = await page.$$("header a");
    expect(links.length).toBeGreaterThan(0);
  });
});