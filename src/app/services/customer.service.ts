import { Injectable } from '@angular/core';
import { CustomerInterface } from '../interfaces/customer.interface';
import { StorageService } from './storage.service';
import { customers } from '../data/customers';
import * as _ from 'lodash';

const customerStorageKey = 'customer_list';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customerList: CustomerInterface[];

  constructor(private storageService: StorageService) {
    this.customerList =
      this.storageService.getData(customerStorageKey) || customers;
  }

  getItems() {
    return this.customerList;
  }

  saveItems() {
    this.storageService.setData(customerStorageKey, this.customerList);
  }

  getItem(itemId) {
    const item = this.customerList.find((e) => e.id === Number(itemId));
    return item || {};
  }

  addItem(item: CustomerInterface) {
    this.customerList.push(item);
    this.saveItems();
  }

  updateItem(itemId, item: CustomerInterface) {
    const index = this.customerList.findIndex((e) => e.id === Number(itemId));
    this.customerList[index] = { ...item };
    this.saveItems();
  }

  deleteItem(itemId) {
    const index = this.customerList.indexOf(itemId);
    this.customerList.splice(index, 1);
    this.saveItems();
  }

  nextItemId() {
    const maxValue = _.maxBy(this.customerList, (o) => o.id);
    return maxValue ? maxValue.id + 1 : 1;
  }
}
