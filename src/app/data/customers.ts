import { CustomerInterface } from '../interfaces/customer.interface';
import { car1, car2, car3, car4 } from './cars';

export const customers: CustomerInterface[] = [
  {
    id: 1,
    name: 'Luan Lucas Tiago Sales',
    cpf: 23640760050,
    phone: 43277951122,
    birthday: new Date('06/08/1992'),
    address: 'Rua Francisco Celestino de Medeiros',
    car: car1,
  },
  {
    id: 2,
    name: 'Sara Marlene Figueiredo',
    cpf: 44567789032,
    phone: 279876439324,
    birthday: new Date('10/05/2000'),
    address: 'Rua Lagoa Negra',
    car: car2,
  },

  {
    id: 3,
    name: 'Isadora Luna Alves',
    cpf: 41150758058,
    phone: 439841528366,
    birthday: new Date('04/20/1980'),
    address: 'Rua Coronel João Rocha',
    car: car3,
  },
  {
    id: 4,
    name: 'Simone Isis Bernardes',
    cpf: 77569214021,
    phone: 27273257635,
    birthday: new Date('12/11/1986'),
    address: 'Rua Búzios',
    car: car4,
  },
];
