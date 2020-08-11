import { browser, element, by } from 'protractor';

export class ListComponent {
  navigateTo() {
    return browser.get('/customer');
  }

  getHeadingText() {
    return element(by.css('app-list h1')).getText();
  }

  getTableList() {
    return element(by.css('.customer-list'));
  }
}
