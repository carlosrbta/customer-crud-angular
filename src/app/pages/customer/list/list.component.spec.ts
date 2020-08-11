import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhonePipe } from '../../../pipes/phone.pipe';
import { CpfPipe } from '../../../pipes/cpf.pipe';
import { TruncatePipe } from '../../../pipes/truncate.pipe';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent, TruncatePipe, CpfPipe, PhonePipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
