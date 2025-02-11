import { expect, type Locator, type Page } from "@playwright/test";

export class CheckboxChallenge {
  readonly page: Page;
  readonly checkbox1: Locator;
  readonly checkbox2: Locator;
  readonly checkbox3: Locator;
  readonly checkbox4: Locator;
  readonly checkbox5: Locator;
  readonly confirmButton: Locator;
  readonly errorMessageNoCheckboxes: Locator;
  readonly errorMessageWrongCombination: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkbox1 = page.locator("#checkbox1");
    this.checkbox2 = page.locator('input[name="checkbox2"]');
    this.checkbox3 = page.locator('input[name="checkbox3"]');
    this.checkbox4 = page.getByRole("checkbox").nth(3);
    this.checkbox5 = page.locator("#ba");

    this.confirmButton = page.getByRole("button", { name: "Confirm" });
    this.errorMessageNoCheckboxes = page.getByText("No checkbox is selected!", {
      exact: true,
    });
    this.errorMessageWrongCombination = page.getByText(
      "The combination of selected"
    );
  }

  async verifyOddCheckboxesAreCheckedByDefault() {
    await expect(this.checkbox1).toBeChecked();
    await expect(this.checkbox3).toBeChecked();
    await expect(this.checkbox5).toBeChecked();
  }

  async verifyEvenCheckboxesAreNotCheckedByDefault() {
    await expect(this.checkbox2).not.toBeChecked();
    await expect(this.checkbox4).not.toBeChecked();
  }

  async noCheckboxesAreChecked() {
    await this.checkbox1.uncheck();
    await expect(this.checkbox1).not.toBeChecked();
    await this.checkbox2.uncheck();
    await expect(this.checkbox2).not.toBeChecked();
    await this.checkbox3.uncheck();
    await expect(this.checkbox3).not.toBeChecked();
    await this.checkbox4.uncheck();
    await expect(this.checkbox4).not.toBeChecked();
    await this.checkbox5.uncheck();
    await expect(this.checkbox5).not.toBeChecked();
  }

  async errorMessageNoCheckboxIsChecked() {
    await expect(this.errorMessageNoCheckboxes).toBeVisible();
    await expect(this.errorMessageNoCheckboxes).toHaveText(
      "No checkbox is selected!"
    );
  }

  async wrongCombinationIsChecked() {
    await this.checkbox1.check();
    await expect(this.checkbox1).toBeChecked();
    await this.checkbox2.check();
    await expect(this.checkbox2).toBeChecked();
    await this.checkbox3.check();
    await expect(this.checkbox3).toBeChecked();
    await this.checkbox4.uncheck();
    await expect(this.checkbox4).not.toBeChecked();
    await this.checkbox5.uncheck();
    await expect(this.checkbox5).not.toBeChecked();
  }

  async errorMessageWrongCombinationIsChecked() {
    await expect(this.errorMessageWrongCombination).toBeVisible();
    await expect(this.errorMessageWrongCombination).toHaveText(
      "The combination of selected profession(s) is NOT correct!"
    );
  }

  async validCombinationIsChecked() {
    await this.checkbox1.uncheck();
    await expect(this.checkbox1).not.toBeChecked();
    await this.checkbox2.check();
    await expect(this.checkbox2).toBeChecked();
    await this.checkbox3.check();
    await expect(this.checkbox3).toBeChecked();
    await this.checkbox4.check();
    await expect(this.checkbox4).toBeChecked();
    await this.checkbox5.uncheck();
    await expect(this.checkbox5).not.toBeChecked();
  }

  async clickConfirmButton() {
    await expect(this.confirmButton).toBeVisible();
    await this.confirmButton.click();
  }
}
