import { expect, Locator, Page, test } from "@playwright/test";
import { MainPage } from "../Pages/mainPage.page";
import { TextBoxChallenge } from "../Pages/textBoxChallenge.page";
import { SuccessMessageShown } from "../Elements/successMessage.element";

import { count } from "console";

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToTextBoxChallenge();
  await expect(page).toHaveURL(
    "https://software-testers.gitlab.io/challenges/automation-challenges/text-box.html"
  );
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test("Verify that error message is shown when nothing is entered into Name field", async ({
  page,
}) => {
  const textBoxChallenge = new TextBoxChallenge(page);
  await textBoxChallenge.checkIfFieldIsEmpty();
  await textBoxChallenge.clickVerifyButton();
  await textBoxChallenge.errorMsgNothingEneteredIsShown();
});

test("Verify that error message is shown when less than 2 letters are entered into Name field", async ({
  page,
}) => {
  const textBoxChallenge = new TextBoxChallenge(page);
  await textBoxChallenge.enterLessThanTwoLetters();
  await textBoxChallenge.clickVerifyButton();
  await textBoxChallenge.errorMsgLessThan2IsShown();
});

test("Verify that error message is shown when no letters are entered into Name field", async ({
  page,
}) => {
  const textBoxChallenge = new TextBoxChallenge(page);
  await textBoxChallenge.enterNoLetters();
  await textBoxChallenge.clickVerifyButton();
  await textBoxChallenge.errorMsgNoLettersIsShown();
});

test("Verify that error message is shown when more than 30 letters are entered into Name field", async ({
  page,
}) => {
  const textBoxChallenge = new TextBoxChallenge(page);
  await textBoxChallenge.enterMoreThan30Letters();
  await textBoxChallenge.clickVerifyButton();
  await textBoxChallenge.errorMsgMoreThan30IsShown();
});

test("Verify that YOU HAVE SOLVED THE CHALLENGE is shown when validname is entered into Name field", async ({
  page,
}) => {
  const textBoxChallenge = new TextBoxChallenge(page);
  await textBoxChallenge.enterYourName();
  await textBoxChallenge.clickVerifyButton();
  const successMessageShown = new SuccessMessageShown(page);
  await successMessageShown.verifySuccessMessage();
});
