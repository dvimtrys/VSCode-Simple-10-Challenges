import { expect, Locator, Page, test } from "@playwright/test";
import { MainPage } from "../Pages/mainPage.page";
import { HamburgerMenuChallenge } from "../Pages/hamburgerMenuChallenge.page";
import { SuccessMessageShown } from "../Elements/successMessage.element";

import { count } from "console";

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToHamburgerMenuChallenge();
  await page.waitForLoadState("networkidle");
  await expect(page).toHaveURL(
    "https://software-testers.gitlab.io/challenges/automation-challenges/hamburger-menu.html"
  );
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test("Verify that error messages are shown when Home, About, Blog or Contact is chosen from Hamburger Menu", async ({
  page,
}) => {
  const hamburgerMenuChallenge = new HamburgerMenuChallenge(page);
  await hamburgerMenuChallenge.checkIfBurgerMenuIsVisible();
  await hamburgerMenuChallenge.clickBurgerMenu();
  await hamburgerMenuChallenge.clickHome();
  await hamburgerMenuChallenge.verifyErrorMessage();
  await hamburgerMenuChallenge.clickAbout();
  await hamburgerMenuChallenge.verifyErrorMessage();
  await hamburgerMenuChallenge.clickBlog();
  await hamburgerMenuChallenge.verifyErrorMessage();
  await hamburgerMenuChallenge.clickContact();
  await hamburgerMenuChallenge.verifyErrorMessage();
});

test("Verify that YOU HAVE SOLVED THE CHALLENGE is shown when VERIFY ME is chosen from Hamburger Menu", async ({
  page,
}) => {
  const hamburgerMenuChallenge = new HamburgerMenuChallenge(page);
  await hamburgerMenuChallenge.clickBurgerMenu();
  await hamburgerMenuChallenge.clickVERIFYME();
  const successMessageShown = new SuccessMessageShown(page);
  await successMessageShown.verifySuccessMessage();
});
