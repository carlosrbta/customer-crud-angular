import { browser, element, by } from 'protractor';

export class CustomerFormComponent {
  navigateTo() {
    return browser.get('/customer/form');
  }

  getHeadingText() {
    return element(by.css('app-form h1')).getText();
  }

  getSubmitButton() {
    return element(by.buttonText('Save'));
  }

  getForm() {
    return element(by.css('app-form form'));
  }

  getCpfInput() {
    return element(by.css('input[formControlName=cpf]'));
  }

  getBirthdayInput() {
    return element(by.css('input[formControlName=birthday]'));
  }
}
