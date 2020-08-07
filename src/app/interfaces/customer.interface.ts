import { CarInterface } from './car.interface';

export interface CustomerInterface {
  id: number;
  name: string;
  cpf: number;
  phone: number;
  birthday: Date;
  address: string;
  car: CarInterface;
}
