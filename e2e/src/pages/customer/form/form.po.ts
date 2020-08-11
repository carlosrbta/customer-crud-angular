import { browser, element, by } from 'protractor';

export class CustomerFormComponent {
  navigateTo(): void {
    return browser.get('/customer/form');
  }

  getHeadingText(): void {
    return element(by.css('app-form h1')).getText();
  }

  getSubmitButton(): void {
    return element(by.buttonText('Save'));
  }

  getForm(): void {
    return element(by.css('app-form form'));
  }

  getCpfInput(): void {
    return element(by.css('input[formControlName=cpf]'));
  }

  getBirthdayInput(): void {
    return element(by.css('input[formControlName=birthday]'));
  }
}
