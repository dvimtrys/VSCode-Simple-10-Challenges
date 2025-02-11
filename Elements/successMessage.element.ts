import { expect, type Locator, type Page } from "@playwright/test";

export class SuccessMessageShown {
  readonly page: Page;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.successMessage = page.getByText("You have solved the challenge!");
  }

  async verifySuccessMessage() {
    await expect(this.successMessage).toHaveText(
      "You have solved the challenge!"
    );
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/success.html"
    );
    await this.page.close();
  }
}
