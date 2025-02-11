import { expect, Locator, Page, test } from "@playwright/test";
import { MainPage } from "../Pages/mainPage.page";
import { RadiobuttonChallenge } from "../Pages/radiobuttonChallenge.page";
import { SuccessMessageShown } from "../Elements/successMessage.element";

import { count } from "console";

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToRadiobuttonChallenge();
  await expect(page).toHaveURL(
    "https://software-testers.gitlab.io/challenges/automation-challenges/radio-button.html"
  );
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test("Verify that error message is shown when no option is selected", async ({
  page,
}) => {
  const radiobuttonChallenge = new RadiobuttonChallenge(page);
  await radiobuttonChallenge.noOptionisSelected();
  await radiobuttonChallenge.confirmButtonClick();
  await radiobuttonChallenge.errorMessageNoOptionShown();
});

test("Verify that success message is shown by role when every role is selected", async ({
  page,
}) => {
  const radiobuttonChallenge = new RadiobuttonChallenge(page);
  await radiobuttonChallenge.selectQA();
  await radiobuttonChallenge.confirmButtonClick();
  await radiobuttonChallenge.successQAmessage();
  await radiobuttonChallenge.selectSD();
  await radiobuttonChallenge.confirmButtonClick();
  await radiobuttonChallenge.successSDmessage();
  await page.reload();
  await radiobuttonChallenge.selectBA();
  await radiobuttonChallenge.confirmButtonClick();
  await radiobuttonChallenge.successBAmessage();
  await radiobuttonChallenge.selectTW();
  await radiobuttonChallenge.confirmButtonClick();
  await radiobuttonChallenge.successTWmessage();
});

test("Verify that YOU HAVE SOLVED THE CHALLENGE is shown when all professions were confirmed at least once", async ({
  page,
}) => {
  const radiobuttonChallenge = new RadiobuttonChallenge(page);
  await radiobuttonChallenge.selectQA();
  await radiobuttonChallenge.confirmButtonClick();
  await radiobuttonChallenge.selectSD();
  await radiobuttonChallenge.confirmButtonClick();
  await radiobuttonChallenge.selectBA();
  await radiobuttonChallenge.confirmButtonClick();
  await radiobuttonChallenge.selectTW();
  await radiobuttonChallenge.confirmButtonClick();
  const successMessageShown = new SuccessMessageShown(page);
  await successMessageShown.verifySuccessMessage();
});
