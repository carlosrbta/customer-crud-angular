import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
