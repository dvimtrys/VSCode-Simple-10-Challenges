import { expect, type Locator, type Page } from "@playwright/test";

export class DropdownChallenge {
  readonly page: Page;
  readonly countriesTitle: Locator;
  readonly countryDropdown: Locator;
  readonly verifyButton: Locator;
  readonly errorMessageAlbania: Locator;
  readonly errorMessageCocosIsland: Locator;
  readonly errorMessageMalawi: Locator;
  readonly errorMessageZimbabwe: Locator;

  constructor(page: Page) {
    this.page = page;
    this.countriesTitle = page.getByText("Countries", { exact: true });
    this.countryDropdown = page.locator("#country");
    this.verifyButton = page.getByRole("button", { name: "VERIFY" });
    this.errorMessageAlbania = page.getByText(
      "Selected country is Albania, NOT Lithuania!"
    );
    this.errorMessageCocosIsland = page.getByText(
      "Selected country is Cocos Island, NOT Lithuania!"
    );
    this.errorMessageMalawi = page.getByText(
      "Selected country is Malawi, NOT Lithuania!"
    );
    this.errorMessageZimbabwe = page.getByText(
      "Selected country is Zimbabwe, NOT Lithuania!"
    );
  }

  async checkIfTitleIsVisible() {
    await expect(this.countriesTitle).toBeVisible();
  }

  async checkIfDropdownMenuIsVisible() {
    await expect(this.countryDropdown).toBeVisible();
  }

  async chooseAlbania() {
    await this.countryDropdown.selectOption("Albania");
    await this.verifyButton.click();
  }

  async clickVerifyButton() {
    await this.verifyButton.click();
  }

  async verifyErrorMessageAlbania() {
    await expect(this.errorMessageAlbania).toBeVisible();
    await expect(this.errorMessageAlbania).toHaveText(
      "Selected country is Albania, NOT Lithuania!"
    );
  }

  async chooseCocosIsland() {
    await this.countryDropdown.selectOption("Cocos Island");
    await this.verifyButton.click();
  }

  async verifyErrorMessageCocosIsland() {
    await expect(this.errorMessageCocosIsland).toBeVisible();
    await expect(this.errorMessageCocosIsland).toHaveText(
      "Selected country is Cocos Island, NOT Lithuania!"
    );
  }

  async chooseMalawi() {
    await this.page.locator("#country").selectOption("Malawi");
    await this.verifyButton.click();
  }

  async verifyErrorMessageMalawi() {
    await expect(this.errorMessageMalawi).toBeVisible();
    await expect(this.errorMessageMalawi).toHaveText(
      "Selected country is Malawi, NOT Lithuania!"
    );
  }

  async chooseZimbabwe() {
    await this.countryDropdown.selectOption("Zimbabwe");
    await this.verifyButton.click();
  }

  async verifyErrorMessageZimbabwe() {
    await expect(this.errorMessageZimbabwe).toBeVisible();
    await expect(this.errorMessageZimbabwe).toHaveText(
      "Selected country is Zimbabwe, NOT Lithuania!"
    );
  }

  async chooseLithuania() {
    await this.countryDropdown.selectOption("Lithuania");
  }
}
