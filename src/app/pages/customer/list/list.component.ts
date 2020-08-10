import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { ConfirmDialogService } from '../../../services/confirm-dialog.service';
import { CustomerInterface } from '../../../interfaces/customer.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  customerList: CustomerInterface[];

  constructor(
    private customerService: CustomerService,
    private confirmDialogService: ConfirmDialogService
  ) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerList = this.customerService.getItems();
    console.log(this.customerList);
  }

  showDialog(customerId) {
    this.confirmDialogService
      .confirm('Remove customer', 'Do you really want to remove this customer?')
      .then((confirmed) => {
        if (confirmed) {
          this.customerService.deleteItem(customerId);
        }
      })
      .catch(() => {});
  }
}
