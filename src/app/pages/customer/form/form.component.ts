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
import * as moment from 'moment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  customer: any = {};
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

    this.customer = this.customerService.getItem(this.customerId);

    let selectedBrand = null;
    let selectedModel = null;
    let birthday = '';

    if (this.customer) {
      selectedBrand = this.customer.car && this.customer.car.brand.id;
      selectedModel = this.customer.car && this.customer.car.id;
      birthday =
        this.customer.birthday &&
        moment(this.customer.birthday).format('DD/MM/YYYY');
    }

    if (selectedBrand) {
      this.onChangeBrand(selectedBrand);
    }

    this.customerForm = this.formBuilder.group({
      name: [this.customer?.name, Validators.required],
      cpf: [this.customer?.cpf, [Validators.required, CpfValidator]],
      phone: [this.customer?.phone, Validators.required],
      birthday: [birthday, [Validators.required, DateValidator]],
      address: [this.customer?.address, Validators.required],
      carBrand: [selectedBrand, Validators.required],
      carModel: [selectedModel, Validators.required],
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
      cpf,
      name,
      phone,
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
