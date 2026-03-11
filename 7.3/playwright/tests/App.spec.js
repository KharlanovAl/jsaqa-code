import { test, expect } from "@playwright/test";
const { chromium } = require("playwright");
const { USER_EMAIL, USER_PASSWORD } = require("./user.js");
    
const invalid_email = 'invalidEmail';
const invalid_password = 'qwert12345';

test("1", async ({ page }) => {
      const browser = await chromium.launch();
      const newPage = await browser.newPage();

      await newPage.goto("https://netology.ru");
      await newPage.getByTestId('header-top').getByRole('link', { name: 'Войти' }).click();
      await newPage.getByText('Войти по почте').click();
      await newPage
        .getByRole('textbox', { name: 'Email' })
        .fill(USER_EMAIL);
      await newPage
        .getByRole('textbox', { name: 'Пароль' })
        .fill(USER_PASSWORD);
      await newPage.getByTestId('login-submit-btn').click();
      await newPage.pause();
    //   const headingText = await newPage.textContent('h2');
      await expect(page.locator('[data-testid="advanced-iframe"]')).toBeVisible();
      //assertion
      await browser.close();
});

test("2", async ({ page }) => {
    const browser = await chromium.launch();
    const newPage = await browser.newPage();

    await newPage.goto("https://netology.ru");
    await newPage.getByTestId('header-top').getByRole('link', { name: 'Войти' }).click();
    await newPage.getByText('Войти по почте').click();
    await newPage
        .getByRole('textbox', { name: 'Email' })
        .fill(invalid_email);
    await newPage
        .getByRole('textbox', { name: 'Пароль' })
        .fill(invalid_password);
    expect(newPage.getByText('Неверный email'));
    
});

//   // Go to https://netology.ru/free/management#/
//   await page.goto("https://netology.ru/free/management#/");

//   // Click a
//   await page.click("a");
//   await expect(page).toHaveURL("https://netology.ru/");

//   // Click text=Учиться бесплатно
//   await page.click("text=Учиться бесплатно");
//   await expect(page).toHaveURL("https://netology.ru/free");

//   page.click("text=Бизнес и управление");

//   // Click text=Как перенести своё дело в онлайн
//   await page.click("text=Как перенести своё дело в онлайн");
//   await expect(page).toHaveURL(
//     "https://netology.ru/programs/kak-perenesti-svoyo-delo-v-onlajn-bp"
//   );
