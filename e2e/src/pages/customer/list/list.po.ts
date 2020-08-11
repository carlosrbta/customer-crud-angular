import { browser, element, by } from 'protractor';

export class CustomerListComponent {
  navigateTo() {
    return browser.get('/customer');
  }

  getHeadingText() {
    return element(by.css('app-list h1')).getText();
  }

  getTableList() {
    return element(by.css('.customer-list'));
  }

  getTableRowEditButton() {
    return element.all(by.css('.customer-list tbody tr td a'));
  }

  getTableRowRemoveButton() {
    return element.all(by.css('.customer-list tbody tr td button'));
  }
}
