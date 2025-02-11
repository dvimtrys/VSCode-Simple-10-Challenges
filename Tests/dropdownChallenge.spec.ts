import { expect, Locator, Page, test } from "@playwright/test";
import { MainPage } from "../Pages/mainPage.page";
import { DropdownChallenge } from "../Pages/dropdownChallenge.page";
import { SuccessMessageShown } from "../Elements/successMessage.element";

import { count } from "console";

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToDropdownChallenge();
  await expect(page).toHaveURL(
    "https://software-testers.gitlab.io/challenges/automation-challenges/drop-down.html"
  );
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test("Verify that error message is shown when selected country is not Lithuania", async ({
  page,
}) => {
  const dropdownChallenge = new DropdownChallenge(page);
  await dropdownChallenge.checkIfTitleIsVisible();
  await dropdownChallenge.checkIfDropdownMenuIsVisible();
  await dropdownChallenge.chooseAlbania();
  await dropdownChallenge.clickVerifyButton();
  await dropdownChallenge.verifyErrorMessageAlbania();
  await dropdownChallenge.chooseCocosIsland();
  await dropdownChallenge.clickVerifyButton();
  await dropdownChallenge.verifyErrorMessageCocosIsland();
  await dropdownChallenge.chooseMalawi();
  await dropdownChallenge.clickVerifyButton();
  await dropdownChallenge.verifyErrorMessageMalawi();
  await dropdownChallenge.chooseZimbabwe();
  await dropdownChallenge.clickVerifyButton();
  await dropdownChallenge.verifyErrorMessageZimbabwe();
});

test("Verify that YOU HAVE SOLVED THE CHALLENGE is shown when selected country is Lithuania", async ({
  page,
}) => {
  const dropdownChallenge = new DropdownChallenge(page);
  await dropdownChallenge.checkIfTitleIsVisible();
  await dropdownChallenge.checkIfDropdownMenuIsVisible();
  await dropdownChallenge.chooseLithuania();
  await dropdownChallenge.clickVerifyButton();
  const successMessageShown = new SuccessMessageShown(page);
  await successMessageShown.verifySuccessMessage();
});
