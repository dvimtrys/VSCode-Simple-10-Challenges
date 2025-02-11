import { expect, type Locator, type Page } from "@playwright/test";

export class TextBoxChallenge {
  readonly page: Page;
  readonly nameTitle: Locator;
  readonly textField: Locator;
  readonly verifyButton: Locator;
  readonly errorMessageNothingEntered: Locator;
  readonly errorMessage2letters: Locator;
  readonly errorMessageNoLetters: Locator;
  readonly errorMessageMoreThan30: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameTitle = page.getByText("* Name");
    this.textField = page.locator("#first-name");
    this.verifyButton = page.getByRole("button", { name: "VERIFY" });
    this.errorMessageNothingEntered = page.getByText(
      "No value entered in Name field!"
    );
    this.errorMessage2letters = page.getByText(
      "Name has to have at least 2 letters!"
    );
    this.errorMessageNoLetters = page.getByText("Name can only have letters!");
    this.errorMessageMoreThan30 = page.getByText(
      "Name cannot have more than 30"
    );
  }

  async checkIfFieldIsEmpty() {
    await expect(this.textField).toBeVisible();
    await expect(this.textField).toBeEmpty();
  }

  async clickVerifyButton() {
    await expect(this.verifyButton).toBeVisible();
    await expect(this.verifyButton).toBeEnabled();
    await this.verifyButton.click();
  }

  async errorMsgNothingEneteredIsShown() {
    await expect(this.errorMessageNothingEntered).toBeVisible();
    await expect(this.errorMessageNothingEntered).toHaveText(
      "No value entered in Name field!"
    );
  }

  async enterLessThanTwoLetters() {
    await expect(this.nameTitle).toBeVisible();
    await expect(this.textField).toBeVisible();
    await this.textField.fill("A");
  }

  async errorMsgLessThan2IsShown() {
    await expect(this.errorMessage2letters).toBeVisible();
    await expect(this.errorMessage2letters).toHaveText(
      "Name has to have at least 2 letters!"
    );
  }

  async enterNoLetters() {
    await expect(this.nameTitle).toBeVisible();
    await expect(this.textField).toBeVisible();
    await this.textField.fill("3424");
  }

  async errorMsgNoLettersIsShown() {
    await expect(this.errorMessageNoLetters).toBeVisible();
    await expect(this.errorMessageNoLetters).toHaveText(
      "Name can only have letters!"
    );
  }

  async enterMoreThan30Letters() {
    await expect(this.nameTitle).toBeVisible();
    await expect(this.textField).toBeVisible();
    await this.textField.fill("Nebeprisikiskiakopusteliaudamasis");
  }

  async errorMsgMoreThan30IsShown() {
    await expect(this.errorMessageMoreThan30).toBeVisible();
    await expect(this.errorMessageMoreThan30).toHaveText(
      "Name cannot have more than 30 letters!"
    );
  }

  async enterYourName() {
    await expect(this.nameTitle).toBeVisible();
    await expect(this.textField).toBeVisible();
    await this.textField.fill("Monika");
  }
}
