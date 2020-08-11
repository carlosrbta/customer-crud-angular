import { browser, element, by } from 'protractor';

export class FormComponent {
  navigateToList() {
    return browser.get('/customer');
  }

  navigateToForm() {
    return browser.get('/customer/form');
  }

  getTableRowEditButton() {
    return element.all(by.css('.customer-list tbody tr td a'));
  }

  getHeadingText() {
    return element(by.css('app-form h1')).getText();
  }
}
