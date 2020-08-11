import { ListComponent } from './list.po';
import { browser, logging } from 'protractor';

describe('workspace-project ListComponent', () => {
  let page: ListComponent;

  beforeEach(() => {
    page = new ListComponent();
    page.navigateTo();
  });

  it('Heading text should be Customer', () => {
    expect(page.getHeadingText()).toEqual('Customer');
  });

  it('Customer list table shoud be present', () => {
    expect(page.getHeadingText()).toEqual('Customer');
    expect(page.getTableList().isPresent()).toBe(true);
  });
});
