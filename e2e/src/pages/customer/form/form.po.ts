import { browser, element, by } from 'protractor';

export class CustomerFormComponent {
  navigateTo(): any {
    return browser.get('/customer/form');
  }

  getHeadingText(): any {
    return element(by.css('app-form h1')).getText();
  }

  getSubmitButton(): any {
    return element(by.buttonText('Save'));
  }

  getForm(): any {
    return element(by.css('app-form form'));
  }

  getNameInput(): any {
    return element(by.css('input[formControlName=name]'));
  }

  getCpfInput(): any {
    return element(by.css('input[formControlName=cpf]'));
  }

  getPhoneInput(): any {
    return element(by.css('input[formControlName=phone]'));
  }

  getBirthdayInput(): any {
    return element(by.css('input[formControlName=birthday]'));
  }

  getAddressInput(): any {
    return element(by.css('input[formControlName=address]'));
  }

  getFirstBrandSelect(): any {
    return element(by.css('select[formControlName=carBrand]')).element(
      by.css('option[value="1"]')
    );
  }

  getFirstModelSelect(): any {
    return element(by.css('select[formControlName=carModel]')).element(
      by.css('option[value="1"]')
    );
  }
}
