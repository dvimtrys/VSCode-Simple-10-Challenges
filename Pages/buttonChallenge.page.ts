import { expect, type Locator, type Page } from "@playwright/test";

export class ButtonChallenge {
  readonly page: Page;
  readonly yellowButton: Locator;
  readonly greenButton: Locator;
  readonly redButton: Locator;
  readonly errorMessageNotInRange: Locator;

  constructor(page: Page) {
    this.page = page;
    this.yellowButton = page.getByRole("button", { name: "Yellow" });
    this.greenButton = page.getByRole("button", { name: "Green" });
    this.redButton = page.getByRole("button", { name: "Red" });
    this.errorMessageNotInRange = page.getByText("Entered number is NOT in");
  }

  async checkIfGreenButtonIsDisabled() {
    await expect(this.greenButton).toBeVisible();
    await expect(this.greenButton.isDisabled()).resolves.toBe(true);
  }

  async checkIfRedButtonIsDisabled() {
    await expect(this.redButton).toBeVisible();
    await expect(this.redButton.isDisabled()).resolves.toBe(true);
  }

  async pressYellowGreenRedbuttons() {
    await expect(this.yellowButton).toBeVisible();
    await this.yellowButton.click();
    await expect(
      this.greenButton.evaluate((element) => {
        return window.getComputedStyle(element).backgroundColor;
      })
    ).resolves.toBe("rgb(158, 222, 115)");
    await expect(this.greenButton).toBeVisible();
    await this.greenButton.click();
    await expect(
      this.redButton.evaluate((element) => {
        return window.getComputedStyle(element).backgroundColor;
      })
    ).resolves.toBe("rgb(190, 0, 0)");
    await expect(this.redButton).toBeVisible();
    await this.redButton.click();
  }
}
