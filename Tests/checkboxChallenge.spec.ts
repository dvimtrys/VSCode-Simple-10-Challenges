import { expect, Locator, Page, test } from "@playwright/test";
import { MainPage } from "../Pages/mainPage.page";
import { CheckboxChallenge } from "../Pages/checkboxChallenge.page";
import { SuccessMessageShown } from "../Elements/successMessage.element";

import { count } from "console";

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToCheckboxChallenge();
  await expect(page).toHaveURL(
    "https://software-testers.gitlab.io/challenges/automation-challenges/check-box.html"
  );
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test("Verify that only 1, 3 and 5 checkboxes are checked by default", async ({
  page,
}) => {
  const checkboxChallenge = new CheckboxChallenge(page);
  await checkboxChallenge.verifyOddCheckboxesAreCheckedByDefault();
});

test("Verify that 2 and 4 checkboxes are not checked by default", async ({
  page,
}) => {
  const checkboxChallenge = new CheckboxChallenge(page);
  await checkboxChallenge.verifyEvenCheckboxesAreNotCheckedByDefault();
});

test("Verify that Error Message is shown when no checkbox is selected", async ({
  page,
}) => {
  const checkboxChallenge = new CheckboxChallenge(page);
  await checkboxChallenge.noCheckboxesAreChecked();
  await checkboxChallenge.clickConfirmButton();
  await checkboxChallenge.errorMessageNoCheckboxIsChecked();
});

test("Verify that Error Message is shown when checkbox combination is not correct", async ({
  page,
}) => {
  const checkboxChallenge = new CheckboxChallenge(page);
  await checkboxChallenge.wrongCombinationIsChecked();
  await checkboxChallenge.clickConfirmButton();
  await checkboxChallenge.errorMessageWrongCombinationIsChecked();
});

test("Verify that YOU HAVE SOLVED THE CHALLENGE is shown when checkbox combination is correct", async ({
  page,
}) => {
  const checkboxChallenge = new CheckboxChallenge(page);
  await checkboxChallenge.validCombinationIsChecked();
  await checkboxChallenge.clickConfirmButton();
  const successMessageShown = new SuccessMessageShown(page);
  await successMessageShown.verifySuccessMessage();
});
