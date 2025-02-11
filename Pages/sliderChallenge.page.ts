import { expect, type Locator, type Page } from "@playwright/test";

export class SliderChallenge {
  readonly page: Page;
  readonly slider: Locator;
  readonly sliderNumber: Locator;
  readonly verifyButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.slider = page.locator("#slider");
    this.sliderNumber = page.locator(
      "body > section > div.center > div.name-and-lastname > label:nth-child(4)"
    );
    this.verifyButton = page.getByRole("button", { name: "VERIFY" });
    this.errorMessage = page.getByText("You have NOT reached 100 yet");
  }

  async choose0onSlider() {
    await expect(this.slider).toBeVisible();
    await expect(this.sliderNumber).toBeVisible();
    await this.slider.fill("0");
    await expect(this.sliderNumber).toHaveText("0");
  }

  async choose50onSlider() {
    await expect(this.slider).toBeVisible();
    await expect(this.sliderNumber).toBeVisible();
    await this.slider.fill("50");
    await expect(this.sliderNumber).toHaveText("50");
  }

  async choose99onSlider() {
    await expect(this.slider).toBeVisible();
    await expect(this.sliderNumber).toBeVisible();
    await this.slider.fill("99");
    await expect(this.sliderNumber).toHaveText("99");
  }

  async errorMsgIsShown() {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText(
      "You have NOT reached 100 yet, try harder!🤪"
    );
  }

  async clickVerifyButton() {
    await expect(this.verifyButton).toBeVisible();
    await this.verifyButton.click();
  }

  async choose100onSlider() {
    await expect(this.slider).toBeVisible();
    await expect(this.sliderNumber).toBeVisible();
    await this.slider.fill("100");
    await expect(this.sliderNumber).toHaveText("100");
  }
}
