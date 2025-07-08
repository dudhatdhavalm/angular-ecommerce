import { browser, by, element } from 'protractor';

export class AppPage {
  // Updated to use async/await syntax for Angular 12 compatibility
  // Changed return type to Promise<unknown> and made method async
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  // Updated to use async/await syntax for Angular 12 compatibility
  // Made method async and kept Promise<string> return type
  async getTitleText(): Promise<string> {
    return element(by.css('app-root h1')).getText();
  }
}