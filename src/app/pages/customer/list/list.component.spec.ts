import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PhonePipe } from '../../../pipes/phone.pipe';
import { CpfPipe } from '../../../pipes/cpf.pipe';
import { TruncatePipe } from '../../../pipes/truncate.pipe';
import { CustomerListComponent } from './list.component';

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerListComponent, TruncatePipe, CpfPipe, PhonePipe],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FontAwesomeTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
