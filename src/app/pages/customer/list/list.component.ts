import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { ToastService } from '../../../services/toast.service';
import { ConfirmDialogService } from '../../../services/confirm-dialog.service';
import { CustomerInterface } from '../../../interfaces/customer.interface';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  customerList: CustomerInterface[];

  faPen = faPen;
  faTrash = faTrash;

  constructor(
    private customerService: CustomerService,
    private confirmDialogService: ConfirmDialogService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerList = this.customerService.getItems();
  }

  showDialog(customerId) {
    this.confirmDialogService
      .confirm('Remove customer', 'Do you really want to remove this customer?')
      .then((confirmed) => {
        if (confirmed) {
          this.customerService.deleteItem(customerId);
          this.toastService.showSuccess('Customer removed successfully!');
        }
      })
      .catch(() => {});
  }
}
