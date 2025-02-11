import { expect, Locator, Page, test } from "@playwright/test";
import { MainPage } from "../Pages/mainPage.page";
import { SliderChallenge } from "../Pages/sliderChallenge.page";
import { SuccessMessageShown } from "../Elements/successMessage.element";

import { count } from "console";

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToSliderChallenge();
  await expect(page).toHaveURL(
    "https://software-testers.gitlab.io/challenges/automation-challenges/slider.html"
  );
});

test.afterEach(async ({ page }) => {
  await page.close();
});

test("Verify that error message is shown when chosen number is not 100", async ({
  page,
}) => {
  const sliderChallenge = new SliderChallenge(page);
  await sliderChallenge.choose0onSlider();
  await sliderChallenge.clickVerifyButton();
  await sliderChallenge.errorMsgIsShown();
  await sliderChallenge.choose50onSlider();
  await sliderChallenge.clickVerifyButton();
  await sliderChallenge.errorMsgIsShown();
  await sliderChallenge.choose99onSlider();
  await sliderChallenge.clickVerifyButton();
  await sliderChallenge.errorMsgIsShown();
});

test("Verify that YOU HAVE SOLVED THE CHALLENGE is shown when 100 is chosen oon the slider", async ({
  page,
}) => {
  const sliderChallenge = new SliderChallenge(page);
  await sliderChallenge.choose100onSlider();
  await sliderChallenge.clickVerifyButton();
  const successMessageShown = new SuccessMessageShown(page);
  await successMessageShown.verifySuccessMessage();
});
