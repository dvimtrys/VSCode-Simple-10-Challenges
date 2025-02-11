import { expect, type Locator, type Page } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly textBoxChallengeButton: Locator;
  readonly inputNumberChallengeButton: Locator;
  readonly buttonChallengeButton: Locator;
  readonly checkboxChallengeButton: Locator;
  readonly radiobuttonChallengeButton: Locator;
  readonly dropdownChallengeButton: Locator;
  readonly hamburgerMenuChallengeButton: Locator;
  readonly sliderChallengeButton: Locator;
  readonly loginChallengeButton: Locator;
  readonly simpleFormChallengeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.textBoxChallengeButton = page.getByRole("link", {
      name: " Text Box challenge",
    });
    this.inputNumberChallengeButton = page.getByRole("link", {
      name: " Input Number challenge",
    });
    this.buttonChallengeButton = page.getByRole("link", {
      name: " Button challenge",
    });
    this.checkboxChallengeButton = page.getByRole("link", {
      name: " Checkbox challenge",
    });
    this.radiobuttonChallengeButton = page.getByRole("link", {
      name: " Radio Button challenge",
    });
    this.dropdownChallengeButton = page.getByRole("link", {
      name: " Drop down challenge",
    });
    this.hamburgerMenuChallengeButton = page.getByRole("link", {
      name: " Hamburger Menu challenge",
    });
    this.sliderChallengeButton = page.getByRole("link", {
      name: " Slider challenge",
    });
    this.loginChallengeButton = page.getByRole("link", {
      name: " Login challenge",
    });
    this.simpleFormChallengeButton = page.getByRole("link", {
      name: " Simple form challenge",
    });
  }

  async goToTextBoxChallenge() {
    await this.page.goto(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    await this.textBoxChallengeButton.click();
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/text-box.html"
    );
  }

  async goToInputNumberChallenge() {
    await this.page.goto(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    await this.inputNumberChallengeButton.click();
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/input-number.html"
    );
  }

  async goToButtonChallenge() {
    await this.page.goto(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    await this.buttonChallengeButton.click();
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/button.html"
    );
  }

  async goToCheckboxChallenge() {
    await this.page.goto(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    await this.checkboxChallengeButton.click();
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/check-box.html"
    );
  }

  async goToRadiobuttonChallenge() {
    await this.page.goto(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    await this.radiobuttonChallengeButton.click();
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/radio-button.html"
    );
  }

  async goToDropdownChallenge() {
    await this.page.goto(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    await this.dropdownChallengeButton.click();
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/drop-down.html"
    );
  }

  async goToHamburgerMenuChallenge() {
    await this.page.goto(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    await this.hamburgerMenuChallengeButton.click();
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/hamburger-menu.html"
    );
  }

  async goToSliderChallenge() {
    await this.page.goto(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    await this.sliderChallengeButton.click();
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/slider.html"
    );
  }

  async goToLoginChallenge() {
    await this.page.goto(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    await this.loginChallengeButton.click();
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/login.html"
    );
  }

  async goToSimpleFormChallenge() {
    await this.page.goto(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/index.html"
    );
    await this.simpleFormChallengeButton.click();
    await this.page.waitForLoadState("networkidle");
    await expect(this.page).toHaveURL(
      "https://software-testers.gitlab.io/challenges/automation-challenges/simple-form.html"
    );
  }
}
