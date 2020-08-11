import { browser, logging } from 'protractor';
import { CustomerFormComponent } from './form.po';
import { CustomerListComponent } from '../list/list.po';

describe('workspace-project CustomerFormComponent', () => {
  let formPage: CustomerFormComponent;
  let listPage: CustomerListComponent;

  beforeEach(() => {
    formPage = new CustomerFormComponent();
    listPage = new CustomerListComponent();
    formPage.navigateTo();
  });

  it('Heading text for new costumer should be New customer', () => {
    expect(formPage.getHeadingText()).toEqual('New customer');
  });

  it('Heading text for editing costumer should be Edit customer', () => {
    listPage.navigateTo();
    listPage.getTableRowEditButton().first().click();

    expect(formPage.getHeadingText()).toEqual('Edit customer');
  });
});
