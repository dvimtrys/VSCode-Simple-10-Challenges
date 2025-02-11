import { expect, Locator, Page, test } from "@playwright/test";
import { MainPage } from "../Pages/mainPage.page";
import { ButtonChallenge } from "../Pages/buttonChallenge.page";
import { SuccessMessageShown } from "../Elements/successMessage.element";

import { count } from "console";

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToButtonChallenge();
  await expect(page).toHaveURL(
    "https://software-testers.gitlab.io/challenges/automation-challenges/button.html"
  );
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test("Verify that green and red buttons are disabled by default", async ({
  page,
}) => {
  const buttonChallenge = new ButtonChallenge(page);
  await buttonChallenge.checkIfGreenButtonIsDisabled();
  await buttonChallenge.checkIfRedButtonIsDisabled();
});

test("Verify that YOU HAVE SOLVED THE CHALLENGE is shown when Yellow -> Green -> Red buttons are pressed", async ({
  page,
}) => {
  const buttonChallenge = new ButtonChallenge(page);
  await buttonChallenge.pressYellowGreenRedbuttons();
  const successMessageShown = new SuccessMessageShown(page);
  await successMessageShown.verifySuccessMessage();
});
