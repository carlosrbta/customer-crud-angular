import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PhonePipe } from './pipes/phone.pipe';
import { CpfPipe } from './pipes/cpf.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

import { StorageService } from './services/storage.service';

import { ListComponent } from './pages/customer/list/list.component';
import { FormComponent } from './pages/customer/form/form.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ToastComponent } from './components/toast/toast.component';

import { TextMaskModule } from 'angular2-text-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    PhonePipe,
    CpfPipe,
    HeaderComponent,
    FooterComponent,
    TruncatePipe,
    ConfirmDialogComponent,
    ToastComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [StorageService],
  bootstrap: [AppComponent, ToastComponent],
})
export class AppModule {}
