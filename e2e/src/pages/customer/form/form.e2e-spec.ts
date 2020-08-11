import { CustomerFormComponent } from './form.po';
import { CustomerListComponent } from '../list/list.po';

describe('Customer Form Component', () => {
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

  it('Empty customer form should be invalid', () => {
    formPage.navigateTo();
    formPage.getSubmitButton().click();

    expect(formPage.getForm().getAttribute('class')).toContain('ng-invalid');
  });

  it('Customer CPF should be valid', () => {
    formPage.navigateTo();

    const input = formPage.getCpfInput();
    input.sendKeys('11122233344');

    formPage.getSubmitButton().click();

    expect(input.getAttribute('class')).toContain('ng-invalid');
  });

  it('Customer birthday should be valid', () => {
    formPage.navigateTo();

    const input = formPage.getBirthdayInput();
    input.sendKeys('32/13/2010');

    formPage.getSubmitButton().click();

    expect(input.getAttribute('class')).toContain('ng-invalid');
  });
});
