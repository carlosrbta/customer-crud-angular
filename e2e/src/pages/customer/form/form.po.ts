import { browser, element, by } from 'protractor';

export class CustomerFormComponent {
  navigateTo() {
    return browser.get('/customer/form');
  }

  getHeadingText() {
    return element(by.css('app-form h1')).getText();
  }
}
