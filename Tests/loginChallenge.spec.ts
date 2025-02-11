import { expect, Locator, Page, test } from "@playwright/test";
import { MainPage } from "../Pages/mainPage.page";
import { LoginChallenge } from "../Pages/loginChallenge.page";
import { SuccessMessageShown } from "../Elements/successMessage.element";

import { count } from "console";

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToLoginChallenge();
  await expect(page).toHaveURL(
    "https://software-testers.gitlab.io/challenges/automation-challenges/login.html"
  );
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test("Verify that error message is shown when no username and password is entered", async ({
  page,
}) => {
  const loginChallenge = new LoginChallenge(page);
  await loginChallenge.verifyFieldsAreEmpty();
  await loginChallenge.clickLoginButton();
  await loginChallenge.usernameErrorMessageIsShown();
});

test("Verify that error message is shown when username is filled and password is empty", async ({
  page,
}) => {
  const loginChallenge = new LoginChallenge(page);
  await loginChallenge.verifyFieldsAreEmpty();
  await loginChallenge.fillValidUsername();
  await loginChallenge.clickLoginButton();
  await loginChallenge.passwordErrorMessageIsShown();
});

test("Verify that error message is shown when username is not entered and password is filled", async ({
  page,
}) => {
  const loginChallenge = new LoginChallenge(page);
  await loginChallenge.verifyFieldsAreEmpty();
  await loginChallenge.fillValidPassword();
  await loginChallenge.clickLoginButton();
  await loginChallenge.usernameErrorMessageIsShown();
});

test("Verify that error message is shown when username is entered and ivalid password is filled", async ({
  page,
}) => {
  const loginChallenge = new LoginChallenge(page);
  await loginChallenge.verifyFieldsAreEmpty();
  await loginChallenge.fillValidUsername();
  await loginChallenge.fillInvalidPassword();
  await loginChallenge.clickLoginButton();
  await loginChallenge.passwordErrorMessageIsShown();
});

test("Verify that YOU HAVE SOLVED THE CHALLENGE is shown when valid username and password is entered", async ({
  page,
}) => {
  const loginChallenge = new LoginChallenge(page);
  await loginChallenge.verifyFieldsAreEmpty();
  await loginChallenge.fillValidUsername();
  await loginChallenge.fillValidPassword();
  await loginChallenge.clickLoginButton();
  const successMessage = new SuccessMessageShown(page);
  await successMessage.verifySuccessMessage();
});
