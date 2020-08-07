import { Injectable } from '@angular/core';
import { CustomerInterface } from '../interfaces/customer.interface';
import { CarInterface } from '../interfaces/car.interface';
import { StorageService } from './storage.service';

const customerStorageKey = 'customer_list';

const car1: CarInterface = {
  brandId: 59,
  brandName: 'VW - VolksWagen',
  modelId: 5585,
  modelName: 'AMAROK CD2.0 16V/S CD2.0 16V TDI 4x2 Die',
};
const car2: CarInterface = {
  brandId: 59,
  brandName: 'VW - VolksWagen',
  modelId: 2359,
  modelName: 'Apolo GL 1.8',
};

const defaultCustomerList: CustomerInterface[] = [
  {
    id: 1,
    name: 'Mahde',
    cpf: 23640760050,
    phone: 4327795112,
    birthday: new Date('1960-03-22'),
    address: 'Rua Francisco Celestino de Medeiros',
    car: car1,
  },
  {
    id: 2,
    name: 'Uthnibe',
    cpf: 44567789032,
    phone: 43984152836,
    birthday: new Date('1972-11-29'),
    address: 'Rua Lagoa Negra',
    car: car2,
  },
];

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customerList: CustomerInterface[];

  constructor(private storageService: StorageService) {}

  getItems() {
    this.customerList =
      this.storageService.getData(customerStorageKey) || defaultCustomerList;
    return this.customerList;
  }

  saveList() {
    this.storageService.setData(customerStorageKey, this.customerList);
  }

  addItem(item: CustomerInterface) {
    this.customerList.push(item);
    this.saveList();
  }

  updateItem(item, changes) {
    const index = this.customerList.indexOf(item);
    this.customerList[index] = { ...item, ...changes };
    this.saveList();
  }

  deleteItem(item) {
    const index = this.customerList.indexOf(item);
    this.customerList.splice(index, 1);
    this.saveList();
  }
}
