let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/marketplace");
});

afterEach(() => {
  page.close();
});

test("The h1 header content for marketplace", async () => {
  const actual = await page.title();
  expect(actual).toContain(
    "GitHub Marketplace · to improve your workflow · GitHub"
  );
}, 1000);

test("test", async () => {
  const actual = await page.$(
    "#heading-title-9dc530c8-2cb0-4807-b264-4bb24b4c1d97"
  );
  expect(actual).toContain("Types");
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  }, 1000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  }, 1000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
  }, 1000);
});
