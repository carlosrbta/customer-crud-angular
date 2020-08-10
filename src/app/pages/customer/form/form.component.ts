import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { FipeService } from '../../../services/fipe.service';
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
export class FormComponent implements OnInit {
  customer: CustomerInterface;
  brands = [];
  models = [];
  customerId = null;

  customerForm: FormGroup;
  submitted = false;

  mask = MaskUtils;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    private fipeService: FipeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => (this.customerId = params['id'])
    );

    this.fipeService.getBrands().subscribe(
      (data) => {
        this.brands = data.map((m) => ({ id: m.codigo, name: m.nome }));
      },
      (error) => {
        console.log(error);
      }
    );

    this.customer = this.customerService.getItem(this.customerId);

    const selectedBrand = this.customer && this.customer.car.brand.id;
    const selectedModel = this.customer && this.customer.car.id;

    if (selectedBrand) this.onChangeBrand(selectedBrand);

    const birthday = this.customer.birthday
      ? moment(this.customer.birthday).format('DD/MM/YYYY')
      : '';

    this.customerForm = this.formBuilder.group({
      name: [this.customer.name, Validators.required],
      cpf: [this.customer.cpf, [Validators.required, CpfValidator]],
      phone: [this.customer.phone, Validators.required],
      birthday: [birthday, [Validators.required, DateValidator]],
      address: [this.customer.address, Validators.required],
      carBrand: [selectedBrand, Validators.required],
      carModel: [selectedModel, Validators.required],
    });

    console.log();
  }

  get f() {
    return this.customerForm.controls;
  }

  onSubmit() {
    console.log(this.customerForm);
    this.submitted = true;

    if (this.customerForm.invalid) {
      // return;
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
      birthday: moment(birthday, 'DD/MM/YYYY').toDate(),
      cpf,
      name,
      phone,
      car: {
        ...this.models.find((e) => e.id === carModel),
        brand: this.brands.find((e) => e.id === carBrand),
      },
      id,
    };

    if (this.customerId) {
      this.customerService.updateItem(id, customer);
    } else {
      this.customerService.addItem(customer);
    }

    this.router.navigate(['/customer']);
  }

  onChangeBrand(value) {
    this.models = [];
    this.fipeService.getModel(value).subscribe(
      (data) => {
        this.models = data.modelos.map((m) => ({
          id: m.codigo,
          name: m.nome,
        }));
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
