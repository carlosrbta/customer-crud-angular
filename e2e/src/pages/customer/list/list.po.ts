import { browser, element, by } from 'protractor';

export class CustomerListComponent {
  navigateTo(): void {
    return browser.get('/customer');
  }

  getHeadingText(): void {
    return element(by.css('app-list h1')).getText();
  }

  getTableList(): void {
    return element(by.css('.customer-list'));
  }

  getTableRowEditButton(): void {
    return element.all(by.css('.customer-list tbody tr td a'));
  }

  getTableRowRemoveButton(): void {
    return element.all(by.css('.customer-list tbody tr td button'));
  }
}
