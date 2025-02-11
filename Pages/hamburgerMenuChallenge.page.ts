import { expect, type Locator, type Page } from "@playwright/test";

export class HamburgerMenuChallenge {
  readonly page: Page;
  readonly hamburgerMenu: Locator;
  readonly hamburgerMenuHome: Locator;
  readonly hamburgerMenuAbout: Locator;
  readonly hamburgerMenuBlog: Locator;
  readonly hamburgerMenuContact: Locator;
  readonly hamburgerMenuVerifyMe: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.hamburgerMenu = page.locator(
      "body > section > div.topnav.container > a"
    );
    this.hamburgerMenuHome = page.getByRole("link", { name: "Home" });
    this.hamburgerMenuAbout = page.getByRole("link", { name: "About" });
    this.hamburgerMenuBlog = page.getByRole("link", { name: "Blog" });
    this.hamburgerMenuContact = page.getByRole("link", { name: "Contact" });
    this.hamburgerMenuVerifyMe = page.getByRole("link", { name: "VERIFY ME" });
    this.errorMessage = page.getByText(
      "You have selected other section than VERIFY ME!"
    );
  }

  async checkIfBurgerMenuIsVisible() {
    await expect(this.hamburgerMenu).toBeVisible();
  }

  async clickBurgerMenu() {
    await this.hamburgerMenu.click();
  }

  async clickHome() {
    await expect(this.hamburgerMenuHome).toBeVisible();
    await this.hamburgerMenuHome.click();
  }

  async clickAbout() {
    await expect(this.hamburgerMenuAbout).toBeVisible();
    await this.hamburgerMenuAbout.click();
  }

  async clickBlog() {
    await expect(this.hamburgerMenuBlog).toBeVisible();
    await this.hamburgerMenuBlog.click();
  }

  async clickContact() {
    await expect(this.hamburgerMenuContact).toBeVisible();
    await this.hamburgerMenuContact.click();
  }

  async verifyErrorMessage() {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText(
      "You have selected other section than VERIFY ME!"
    );
  }

  async clickVERIFYME() {
    await this.hamburgerMenuVerifyMe.click();
  }
}
