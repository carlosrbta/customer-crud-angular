import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export function DateValidator(control: AbstractControl) {
  const date = control.value;

  if (date && date && !moment(date, 'DD/MM/YYYY', true).isValid()) {
    return { invalid: true };
  }
  return null;
}
