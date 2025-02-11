import { expect, type Locator, type Page } from "@playwright/test";

export class InputNumberChallenge {
  readonly page: Page;
  readonly numberTitle: Locator;
  readonly numberBox: Locator;
  readonly verifyButton: Locator;
  readonly errorMessageEmptyField: Locator;
  readonly errorMessageNotInRange: Locator;

  constructor(page: Page) {
    this.page = page;
    this.numberTitle = page.getByText("Number:");
    this.numberBox = page.locator("#number-box");
    this.verifyButton = page.getByRole("button", { name: "VERIFY" });
    this.errorMessageEmptyField = page.getByText("No number is entered!");
    this.errorMessageNotInRange = page.getByText(
      "Entered number is NOT in range of 0-100!"
    );
  }

  async clickVerifyButton() {
    await expect(this.verifyButton).toBeVisible();
    await expect(this.verifyButton).toBeEnabled();
    await this.verifyButton.click();
  }

  async checkIfNumberBoxIsEmpty() {
    await expect(this.numberBox).toBeVisible();
    await expect(this.numberBox).toBeEmpty();
  }

  async errorMessageEmptyFieldShown() {
    await expect(this.errorMessageEmptyField).toBeVisible();
    await expect(this.errorMessageEmptyField).toHaveText(
      "No number is entered!"
    );
  }

  async enterMoreThan100() {
    await expect(this.numberTitle).toBeVisible();
    await expect(this.numberBox).toBeVisible();
    await this.numberBox.fill("199");
  }

  async errorMessageNotInRangeShown() {
    await expect(this.errorMessageNotInRange).toBeVisible();
    await expect(this.errorMessageNotInRange).toHaveText(
      "Entered number is NOT in range of 0-100!"
    );
  }

  async enterLessThan0() {
    await expect(this.numberTitle).toBeVisible();
    await expect(this.numberBox).toBeVisible();
    await this.numberBox.fill("-2");
  }
  async enterValidNumber() {
    await expect(this.numberTitle).toBeVisible();
    await expect(this.numberBox).toBeVisible();
    await this.numberBox.fill("23");
  }
}
