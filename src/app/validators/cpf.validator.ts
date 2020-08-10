import { AbstractControl } from '@angular/forms';

export function CpfValidator(control: AbstractControl) {
  let sum = 0;
  let rest;
  let valid;

  const value = `${control.value}`;
  const cpf = (value || '').replace(/\D/g, '');
  const regex = new RegExp('[0-9]{11}');

  if (
    cpf == '00000000000' ||
    cpf == '11111111111' ||
    cpf == '22222222222' ||
    cpf == '33333333333' ||
    cpf == '44444444444' ||
    cpf == '55555555555' ||
    cpf == '66666666666' ||
    cpf == '77777777777' ||
    cpf == '88888888888' ||
    cpf == '99999999999' ||
    !regex.test(cpf)
  )
    valid = false;
  else {
    for (let i = 1; i <= 9; i++)
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(cpf.substring(9, 10))) valid = false;

    sum = 0;
    for (let i = 1; i <= 10; i++)
      sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if (rest == 10 || rest == 11) rest = 0;
    if (rest != parseInt(cpf.substring(10, 11))) valid = false;
    valid = true;
  }

  if (!valid && value) {
    return { invalid: true };
  }

  return null;
}