import { expect, type Locator, type Page } from "@playwright/test";

export class LoginChallenge {
  readonly page: Page;
  readonly usernameTitle: Locator;
  readonly passwordTitle: Locator;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly usernameErrorMessage: Locator;
  readonly passwordErrorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameTitle = page.locator("label").filter({ hasText: "Username" });
    this.passwordTitle = page.locator("label").filter({ hasText: "Password" });
    this.usernameField = page.locator("#user-name");
    this.passwordField = page.locator("#password");
    this.loginButton = page.getByRole("button", { name: "Log In" });
    this.usernameErrorMessage = page.getByText(
      "You have NOT filled Username field"
    );
    this.passwordErrorMessage = page.getByText(
      "Either password is incorrect or not filled!"
    );
  }

  async clickLoginButton() {
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/login.html"
    );
    await expect(this.loginButton).toBeVisible();
    await this.loginButton.click();
  }

  async verifyFieldsAreEmpty() {
    await expect(this.usernameTitle).toBeVisible();
    await expect(this.usernameField).toBeVisible();
    await expect(this.usernameField).toBeEmpty();
    await expect(this.usernameTitle).toBeVisible();
    await expect(this.usernameField).toBeVisible();
    await expect(this.usernameField).toBeEmpty();
  }

  async fillInvalidUsername() {
    await expect(this.usernameTitle).toBeVisible();
    await expect(this.usernameField).toBeVisible();
    await expect(this.usernameField).toBeEmpty();
    await this.usernameField.fill("asda");
  }

  async fillValidUsername() {
    await expect(this.usernameTitle).toBeVisible();
    await expect(this.usernameField).toBeVisible();
    await expect(this.usernameField).toBeEmpty();
    await this.usernameField.fill("123456");
  }

  async fillInvalidPassword() {
    await expect(this.passwordTitle).toBeVisible();
    await expect(this.passwordField).toBeVisible();
    await expect(this.passwordField).toBeEmpty();
    await this.passwordField.fill("10io");
  }

  async fillValidPassword() {
    await expect(this.passwordTitle).toBeVisible();
    await expect(this.passwordField).toBeVisible();
    await expect(this.passwordField).toBeEmpty();
    await this.passwordField.fill("abcd1234");
  }

  async usernameErrorMessageIsShown() {
    await expect(this.usernameErrorMessage).toBeVisible();
    await expect(this.usernameErrorMessage).toHaveText(
      "You have NOT filled Username field"
    );
  }

  async passwordErrorMessageIsShown() {
    await expect(this.passwordErrorMessage).toBeVisible();
    await expect(this.passwordErrorMessage).toHaveText(
      "Either password is incorrect or not filled!"
    );
  }
}
