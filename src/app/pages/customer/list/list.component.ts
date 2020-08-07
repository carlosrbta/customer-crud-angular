import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { CustomerInterface } from '../../../interfaces/customer.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  customerList: CustomerInterface[];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerList = this.customerService.getItems();
    console.log(this.customerList);
  }
}
