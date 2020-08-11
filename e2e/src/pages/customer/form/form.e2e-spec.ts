import { browser } from 'protractor';
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

  it('Should be create customer', async () => {
    formPage.navigateTo();

    const name = formPage.getNameInput();
    name.sendKeys('Lais Nair Amanda Moura');

    const cpf = formPage.getCpfInput();
    cpf.sendKeys('258.297.644-07');

    const phone = formPage.getPhoneInput();
    phone.sendKeys('(68) 3612-9550');

    const birthday = formPage.getBirthdayInput();
    birthday.sendKeys('07/01/1995');

    const address = formPage.getAddressInput();
    address.sendKeys('Rua Rego Barros 427');

    const carBrand = formPage.getFirstBrandSelect();
    carBrand.click();

    await browser.sleep(2000);

    const carModel = formPage.getFirstModelSelect();
    carModel.click();

    formPage.getSubmitButton().click();

    await browser.sleep(1000);

    expect(browser.getCurrentUrl()).toContain('/customer');
  });

  it('Should be edit customer', async () => {
    listPage.navigateTo();
    listPage.getTableRowEditButton().first().click();

    formPage.getSubmitButton().click();

    await browser.sleep(1000);

    expect(browser.getCurrentUrl()).toContain('/customer');
  });
});
