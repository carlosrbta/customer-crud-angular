import { BrandInterface } from './brand.interface';

export interface CarInterface {
  id: string;
  name: string;
  brand: BrandInterface;
}
