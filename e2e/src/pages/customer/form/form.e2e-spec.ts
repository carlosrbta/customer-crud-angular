import { FormComponent } from './form.po';
import { browser, logging } from 'protractor';

describe('workspace-project FormComponent', () => {
  let page: FormComponent;

  beforeEach(() => {
    page = new FormComponent();
    page.navigateToList();
  });

  it('Heading text for new costumer should be New customer', () => {
    page.navigateToForm();
    expect(page.getHeadingText()).toEqual('New customer');
  });

  it('Heading text for editing costumer should be Edit customer', () => {
    page.navigateToList();
    page.getTableRowEditButton().first().click();

    expect(page.getHeadingText()).toEqual('Edit customer');
  });
});
