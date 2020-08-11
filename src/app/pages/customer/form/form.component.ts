import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { FipeService } from '../../../services/fipe.service';
import { ToastService } from '../../../services/toast.service';
import { CustomerInterface } from '../../../interfaces/customer.interface';
import { CpfValidator } from '../../../validators/cpf.validator';
import { DateValidator } from '../../../validators/date.validator';
import { MaskUtils } from '../../../utils/mask.utils';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  customer: Observable<CustomerInterface>;
  brands = [];
  models = [];
  customerId = null;
  customerForm: FormGroup;
  submitted = false;
  mask = MaskUtils;
  title = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private fipeService: FipeService,
    private formBuilder: FormBuilder,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.customerId = params.id;
    });

    this.fipeService.getBrands().subscribe(
      (data) => {
        this.brands = data.map((m) => ({ id: m.codigo, name: m.nome }));
      },
      (error) => {
        this.toastService.showError('Error on load car brands.');
      }
    );

    this.title = this.customerId ? 'Edit customer' : 'New customer';

    this.customerForm = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', [Validators.required, CpfValidator]],
      phone: ['', Validators.required],
      birthday: ['', [Validators.required, DateValidator]],
      address: ['', Validators.required],
      carBrand: ['', Validators.required],
      carModel: ['', Validators.required],
    });

    if (!this.customerId) {
      return;
    }

    this.customerService
      .getItem(this.customerId)
      .subscribe(async (customer) => {
        await this.onChangeBrand(customer.car.brand.id);

        this.customerForm.patchValue({
          name: customer.name,
          cpf: customer.cpf,
          phone: customer.phone,
          birthday: moment(customer.birthday).format('DD/MM/YYYY'),
          address: customer.address,
          carBrand: customer.car.brand.id,
          carModel: customer.car.id,
        });
      });
  }

  get f(): any {
    return this.customerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.customerForm.invalid) {
      return;
    }

    const {
      address,
      birthday,
      cpf,
      name,
      phone,
      carBrand,
      carModel,
    } = this.customerForm.value;

    const id = this.customerId || this.customerService.nextItemId();

    const customer: CustomerInterface = {
      address,
      name,
      cpf: cpf.replace(/\D/g, ''),
      phone: phone.replace(/\D/g, ''),
      id: Number(id),
      birthday: moment(birthday, 'DD/MM/YYYY').toDate(),
      car: {
        ...this.models.find(
          (e) => e.id === carModel || e.id === Number(carModel)
        ),
        brand: this.brands.find(
          (e) => e.id === carBrand || e.id === Number(carBrand)
        ),
      },
    };

    const msg = this.customerId
      ? 'Customer updated successfully!'
      : 'Customer saved successfully!';

    this.customerId
      ? this.customerService.updateItem(id, customer)
      : this.customerService.addItem(customer);

    this.toastService.showSuccess(msg);
    this.router.navigate(['/customer']);
  }

  onChangeBrand(value): void {
    this.models = [];

    this.fipeService.getModel(value).subscribe(
      (data) => {
        this.models = data.modelos.map((m) => ({
          id: m.codigo,
          name: m.nome,
        }));
      },
      (error) => {
        this.toastService.showError('Error on load car models.');
      }
    );
  }
}
