import { CustomerListComponent } from './list.po';
import { browser, logging } from 'protractor';

describe('Customer List Component', () => {
  let listPage: CustomerListComponent;

  beforeEach(() => {
    listPage = new CustomerListComponent();
    listPage.navigateTo();
  });

  it('Heading text should be Customer', () => {
    expect(listPage.getHeadingText()).toEqual('Customer');
  });

  it('Customer list table shoud be present', () => {
    expect(listPage.getHeadingText()).toEqual('Customer');
    expect(listPage.getTableList().isPresent()).toBe(true);
  });
});
