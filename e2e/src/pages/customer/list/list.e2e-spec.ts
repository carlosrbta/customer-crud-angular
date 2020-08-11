import { CustomerListComponent } from './list.po';
import { browser } from 'protractor';

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

  it('Should be remove customer', async () => {
    listPage.navigateTo();

    const rowsBefore = await listPage.getTableRows().count();

    listPage.getTableRowRemoveButton().first().click();

    await browser.sleep(500);

    listPage.getConfirmRemoveButton().click();

    const rowsAfter = await listPage.getTableRows().count();
    const total = rowsBefore - 1;

    expect(rowsAfter).toEqual(total);
  });
});
