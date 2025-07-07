import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    // Updated Promise type from 'any' to 'unknown' for better type safety in Angular 11
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText() {
    // No changes needed for element selector as it's already using modern syntax
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}