import { CarInterface } from './car.interface';

export interface CustomerInterface {
  id: number;
  name: string;
  cpf: string;
  phone: string;
  birthday: Date;
  address: string;
  car: CarInterface;
}
