import { expect, Locator, Page, test } from "@playwright/test";
import { MainPage } from "../Pages/mainPage.page";
import { SimpleFormChallenge } from "../Pages/SimpleFormChallenge.page";
import { SuccessMessageShown } from "../Elements/successMessage.element";

import { count } from "console";

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToSimpleFormChallenge();
  await expect(page).toHaveURL(
    "https://software-testers.gitlab.io/challenges/automation-challenges/simple-form.html"
  );
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test("Verify that error message is shown when no required field is filled", async ({
  page,
}) => {
  const simpleFormChallenge = new SimpleFormChallenge(page);
  await simpleFormChallenge.checkIfFieldsAreEmpty();
  await simpleFormChallenge.pressSubmitButton();
  await simpleFormChallenge.errorMsgNoValueFirstNameIsShown();
});

test("Verify that error message is shown when one of the required fields is not filled", async ({
  page,
}) => {
  const simpleFormChallenge = new SimpleFormChallenge(page);
  await simpleFormChallenge.checkIfFieldsAreEmpty();
  await simpleFormChallenge.enterFirstName();
  await simpleFormChallenge.enterLastName();
  await simpleFormChallenge.chooseFemaleGender();
  await simpleFormChallenge.chooseCountryCodeLT();
  await simpleFormChallenge.enterValidPhoneNumber();
  await simpleFormChallenge.checkTermsAndConditionsCheckbox();
  await simpleFormChallenge.pressSubmitButton();
  await simpleFormChallenge.errorMsgNoValueEmailIsShown();
});

test("Verify that error message is shown when email format is invalid", async ({
  page,
}) => {
  const simpleFormChallenge = new SimpleFormChallenge(page);
  await simpleFormChallenge.checkIfFieldsAreEmpty();
  await simpleFormChallenge.enterFirstName();
  await simpleFormChallenge.enterLastName();
  await simpleFormChallenge.enterInvalidEmail();
  await simpleFormChallenge.chooseFemaleGender();
  await simpleFormChallenge.chooseCountryCodeLT();
  await simpleFormChallenge.enterValidPhoneNumber();
  await simpleFormChallenge.checkTermsAndConditionsCheckbox();
  await simpleFormChallenge.pressSubmitButton();
  await simpleFormChallenge.errorMsgNotValidEmailIsShown();
});

test("Verify that YOU HAVE SOLVED THE CHALLENGE is shown when all fields are filled with valid information", async ({
  page,
}) => {
  const simpleFormChallenge = new SimpleFormChallenge(page);
  await simpleFormChallenge.checkIfFieldsAreEmpty();
  await simpleFormChallenge.enterFirstName();
  await simpleFormChallenge.enterLastName();
  await simpleFormChallenge.enterValidEmail();
  await simpleFormChallenge.chooseFemaleGender();
  await simpleFormChallenge.chooseCountryCodeLT();
  await simpleFormChallenge.enterValidPhoneNumber();
  await simpleFormChallenge.checkTermsAndConditionsCheckbox();
  await simpleFormChallenge.pressSubmitButton();
  const successMessageShown = new SuccessMessageShown(page);
  await successMessageShown.verifySuccessMessage();
});
