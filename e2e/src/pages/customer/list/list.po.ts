import { browser, element, by } from 'protractor';

export class CustomerListComponent {
  navigateTo(): any {
    return browser.get('/customer');
  }

  getHeadingText(): any {
    return element(by.css('app-list h1')).getText();
  }

  getTableList(): any {
    return element(by.css('.customer-list'));
  }

  getTableRows(): any {
    return element.all(by.css('.customer-list tbody tr'));
  }

  getTableRowEditButton(): any {
    return element.all(by.css('.customer-list tbody tr td a'));
  }

  getTableRowRemoveButton(): any {
    return element.all(by.css('.customer-list tbody tr td button'));
  }

  getConfirmRemoveButton(): any {
    return element.all(by.css('app-confirm-dialog .btn-primary'));
  }
}
