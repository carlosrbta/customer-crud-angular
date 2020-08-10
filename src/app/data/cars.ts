import { BrandInterface } from '../interfaces/brand.interface';
import { CarInterface } from '../interfaces/car.interface';

export const brand1: BrandInterface = {
  id: '59',
  name: 'VW - VolksWagen',
};

export const brand2: BrandInterface = {
  id: '23',
  name: 'GM - Chevrolet',
};

export const car1: CarInterface = {
  id: '5585',
  name: 'AMAROK CD2.0 16V/S CD2.0 16V TDI 4x2 Die',
  brand: brand1,
};

export const car2: CarInterface = {
  id: '2359',
  name: 'Apolo GL 1.8',
  brand: brand1,
};

export const car3: CarInterface = {
  id: '3819',
  name: 'Meriva SS 1.8 MPFI 8V FlexPower 5p',
  brand: brand2,
};

export const car4: CarInterface = {
  id: '933',
  name: 'Astra 2.0/ CD 2.0 8V 3p Aut.',
  brand: brand2,
};
