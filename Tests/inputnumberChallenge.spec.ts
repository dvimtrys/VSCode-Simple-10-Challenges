import { expect, Locator, Page, test } from "@playwright/test";
import { MainPage } from "../Pages/mainPage.page";
import { InputNumberChallenge } from "../Pages/inputNumberChallenge.page";
import { SuccessMessageShown } from "../Elements/successMessage.element";

import { count } from "console";

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToInputNumberChallenge();
  await expect(page).toHaveURL(
    "https://software-testers.gitlab.io/challenges/automation-challenges/input-number.html"
  );
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test("Verify that error message is shown when nothing is entered into Number box", async ({
  page,
}) => {
  const inputNumberChallenge = new InputNumberChallenge(page);
  await inputNumberChallenge.checkIfNumberBoxIsEmpty();
  await inputNumberChallenge.clickVerifyButton();
  await inputNumberChallenge.errorMessageEmptyFieldShown();
});

test("Verify that error message is shown when entered number into Number box is more than 100", async ({
  page,
}) => {
  const inputNumberChallenge = new InputNumberChallenge(page);
  await inputNumberChallenge.enterMoreThan100();
  await inputNumberChallenge.clickVerifyButton();
  await inputNumberChallenge.errorMessageNotInRangeShown();
});

test("Verify that error message is shown when entered number into Number box is less than 0", async ({
  page,
}) => {
  const inputNumberChallenge = new InputNumberChallenge(page);
  await inputNumberChallenge.enterLessThan0();
  await inputNumberChallenge.clickVerifyButton();
  await inputNumberChallenge.errorMessageNotInRangeShown();
});

test("Verify that YOU HAVE SOLVED THE CHALLENGE is shown when entered number into Number box is between 0 - 100", async ({
  page,
}) => {
  const inputNumberChallenge = new InputNumberChallenge(page);
  await inputNumberChallenge.enterValidNumber();
  await inputNumberChallenge.clickVerifyButton();
  const successMessageShown = new SuccessMessageShown(page);
  await successMessageShown.verifySuccessMessage();
});
