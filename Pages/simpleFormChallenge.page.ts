import { expect, type Locator, type Page } from "@playwright/test";

export class SimpleFormChallenge {
  readonly page: Page;
  readonly firstNameTitle: Locator;
  readonly firstNameField: Locator;
  readonly lastNameTitle: Locator;
  readonly lastNameField: Locator;
  readonly emailTitle: Locator;
  readonly emailField: Locator;
  readonly genderTitle: Locator;
  readonly femaleRadiobutton: Locator;
  readonly maleRadiobutton: Locator;
  readonly femaleMaleTitle: Locator;
  readonly mobilePhoneTitle: Locator;
  readonly countryCodeDropdown: Locator;
  readonly numberField: Locator;
  readonly termsAndConditionsCheckbox: Locator;
  readonly submitButton: Locator;
  readonly errorMsgNoValueFirstName: Locator;
  readonly errorMsgNoValueLastName: Locator;
  readonly errorMsgNoValueEmail: Locator;
  readonly errorMsgNotValidEmail: Locator;
  readonly errorMsgNoValuePhone: Locator;
  readonly errorMsgNotValidPhone: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameTitle = page.getByText("* First Name");
    this.firstNameField = page.getByLabel("* First Name");
    this.lastNameTitle = page.getByText("* Last Name");
    this.lastNameField = page.getByLabel("* Last Name");
    this.emailTitle = page.getByText("* Email");
    this.emailField = page.getByLabel("* Email");
    this.genderTitle = page.getByText("* Gender:");
    this.femaleRadiobutton = page.locator("#sex-female");
    this.maleRadiobutton = page.locator("#sex-male");
    this.femaleMaleTitle = page.getByText("Female Male");
    this.mobilePhoneTitle = page.getByText("* Mobile Phone");
    this.countryCodeDropdown = page.locator("#country-code");
    this.numberField = page.getByPlaceholder("Enter the number");
    this.termsAndConditionsCheckbox = page.locator("#terms-checkbox");
    this.submitButton = page.getByRole("button", { name: "SUBMIT" });
    this.errorMsgNoValueFirstName = page.getByText(
      "No value entered in First Name field!"
    );
    this.errorMsgNoValueLastName = page.getByText(
      "No value entered in Last Name field!"
    );
    this.errorMsgNoValueEmail = page.getByText(
      "No value entered in Email field!"
    );
    this.errorMsgNotValidEmail = page.getByText("Email format is not valid!");
    this.errorMsgNoValuePhone = page.getByText(
      "No value entered in Mobile Phone field!"
    );
    this.errorMsgNotValidPhone = page.getByText(
      "Number has to be from at least 8 digits"
    );
  }

  async pressSubmitButton() {
    await expect(this.submitButton).toBeVisible();
    await expect(this.submitButton.isEnabled()).resolves.toBe(true);
    await this.submitButton.click();
  }

  async checkIfFieldsAreEmpty() {
    await expect(this.firstNameField).toBeEmpty();
    await expect(this.lastNameField).toBeEmpty();
    await expect(this.emailField).toBeEmpty();
    await expect(this.femaleRadiobutton).not.toBeChecked();
    await expect(this.maleRadiobutton).not.toBeChecked();
    await expect(this.numberField).toBeEmpty();
    await expect(this.termsAndConditionsCheckbox).not.toBeChecked();
  }

  async enterFirstName() {
    await expect(this.firstNameTitle).toBeVisible();
    await expect(this.firstNameField).toBeVisible();
    await this.firstNameField.fill("Van");
  }

  async enterLastName() {
    await expect(this.lastNameTitle).toBeVisible();
    await expect(this.lastNameField).toBeVisible();
    await this.lastNameField.fill("Bam");
  }

  async enterValidEmail() {
    await expect(this.emailTitle).toBeVisible();
    await expect(this.emailField).toBeVisible();
    await this.emailField.fill("van.bam@email.com");
  }

  async enterInvalidEmail() {
    await expect(this.emailTitle).toBeVisible();
    await expect(this.emailField).toBeVisible();
    await this.emailField.fill("van.bamemail.com");
  }

  async chooseFemaleGender() {
    await expect(this.genderTitle).toBeVisible();
    await expect(this.femaleMaleTitle).toBeVisible();
    await expect(this.femaleRadiobutton).toBeVisible();
    await expect(this.maleRadiobutton).toBeVisible();
    await this.femaleRadiobutton.check();
    await expect(this.femaleRadiobutton).toBeChecked();
    await expect(this.maleRadiobutton).not.toBeChecked();
  }

  async chooseMaleGender() {
    await expect(this.genderTitle).toBeVisible();
    await expect(this.femaleMaleTitle).toBeVisible();
    await expect(this.maleRadiobutton).toBeVisible();
    await expect(this.maleRadiobutton).toBeVisible();
    await this.maleRadiobutton.check();
    await expect(this.maleRadiobutton).toBeChecked();
    await expect(this.femaleRadiobutton).not.toBeChecked();
  }

  async chooseCountryCodeLT() {
    await expect(this.mobilePhoneTitle).toBeVisible();
    await expect(this.countryCodeDropdown).toBeVisible();
    await this.countryCodeDropdown.selectOption("370");
  }

  async enterValidPhoneNumber() {
    await expect(this.numberField).toBeVisible();
    await this.numberField.fill("60000000");
  }
  async enterInvalidPhoneNumber() {
    await expect(this.numberField).toBeVisible();
    await this.numberField.fill("8");
  }

  async checkTermsAndConditionsCheckbox() {
    await expect(this.termsAndConditionsCheckbox).toBeVisible();
    await expect(this.termsAndConditionsCheckbox).not.toBeChecked();
    await this.termsAndConditionsCheckbox.check();
    await expect(this.termsAndConditionsCheckbox).toBeChecked();
  }

  async errorMsgNoValueFirstNameIsShown() {
    await expect(this.errorMsgNoValueFirstName).toBeVisible();
    await expect(this.errorMsgNoValueFirstName).toHaveText(
      "No value entered in First Name field!"
    );
  }

  async errorMsgNoValueLastNameIsShown() {
    await expect(this.errorMsgNoValueLastName).toBeVisible();
    await expect(this.errorMsgNoValueLastName).toHaveText(
      "No value entered in Last Name field!"
    );
  }

  async errorMsgNoValueEmailIsShown() {
    await expect(this.errorMsgNoValueEmail).toBeVisible();
    await expect(this.errorMsgNoValueEmail).toHaveText(
      "No value entered in Email field!"
    );
  }

  async errorMsgNotValidEmailIsShown() {
    await expect(this.errorMsgNotValidEmail).toBeVisible();
    await expect(this.errorMsgNotValidEmail).toHaveText(
      "Email format is not valid!"
    );
  }

  async errorMsgNoValuePhoneIsShown() {
    await expect(this.errorMsgNoValuePhone).toBeVisible();
    await expect(this.errorMsgNoValuePhone).toHaveText(
      "No value entered in mobile Phone field!"
    );
  }
}
