import { expect, type Locator, type Page } from "@playwright/test";

export class RadiobuttonChallenge {
  readonly page: Page;
  readonly textField: Locator;
  readonly radioButtonQA: Locator;
  readonly radioButtonSD: Locator;
  readonly radioButtonBA: Locator;
  readonly radioButtonTW: Locator;
  readonly confirmButton: Locator;
  readonly errorMessageNoOption: Locator;
  readonly successMessageQAEngineer: Locator;
  readonly successMessageSoftwareDeveloper: Locator;
  readonly successMessageBusinessAnalyst: Locator;
  readonly successMessageTechnicalWriter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.radioButtonQA = page.locator("#profession-tester");
    this.radioButtonSD = page.locator("#profession-developer");
    this.radioButtonBA = page.locator("#profession-analyst");
    this.radioButtonTW = page.locator("#profession-writer");
    this.confirmButton = page.getByRole("button", { name: "Confirm" });
    this.errorMessageNoOption = page.getByText("No option is selected!", {
      exact: true,
    });
    this.successMessageQAEngineer = page.getByText(
      "QA Test Engineer is selected!"
    );
    this.successMessageSoftwareDeveloper = page.getByText(
      "Software Developer is selected!"
    );
    this.successMessageBusinessAnalyst = page.getByText(
      "Business Analystic is selected!"
    );
    this.successMessageTechnicalWriter = page.getByText(
      "Technical Writer is selected!"
    );
  }

  async noOptionisSelected() {
    await expect(this.radioButtonQA).not.toBeChecked();
    await expect(this.radioButtonSD).not.toBeChecked();
    await expect(this.radioButtonBA).not.toBeChecked();
    await expect(this.radioButtonTW).not.toBeChecked();
  }

  async errorMessageNoOptionShown() {
    await expect(this.errorMessageNoOption).toBeVisible();
    await expect(this.errorMessageNoOption).toHaveText(
      "No option is selected!"
    );
  }

  async selectQA() {
    await expect(this.radioButtonQA).toBeVisible();
    await this.radioButtonQA.check();
    await expect(this.radioButtonQA).toBeChecked();
    await this.confirmButton.click();
  }

  async successQAmessage() {
    await expect(this.successMessageQAEngineer).toBeVisible();
    await expect(this.successMessageQAEngineer).toHaveText(
      "QA Test Engineer is selected!"
    );
  }

  async selectSD() {
    await expect(this.radioButtonSD).toBeVisible();
    await this.radioButtonSD.check();
    await expect(this.radioButtonSD).toBeChecked();
  }

  async successSDmessage() {
    await expect(this.successMessageSoftwareDeveloper).toBeVisible();
    await expect(this.successMessageSoftwareDeveloper).toHaveText(
      "Software Developer is selected!"
    );
  }

  async selectBA() {
    await expect(this.radioButtonBA).toBeVisible();
    await this.radioButtonBA.check();
    await expect(this.radioButtonBA).toBeChecked();
  }

  async successBAmessage() {
    await expect(this.successMessageBusinessAnalyst).toBeVisible();
    await expect(this.successMessageBusinessAnalyst).toHaveText(
      "Business Analystic is selected!"
    );
  }

  async selectTW() {
    await expect(this.radioButtonTW).toBeVisible();
    await this.radioButtonTW.check();
    await expect(this.radioButtonTW).toBeChecked();
  }

  async successTWmessage() {
    await expect(this.successMessageTechnicalWriter).toBeVisible();
    await expect(this.successMessageTechnicalWriter).toHaveText(
      "Technical Writer is selected!"
    );
  }

  async confirmButtonClick() {
    await expect(this.confirmButton).toBeVisible();
    await this.confirmButton.click();
  }
}
