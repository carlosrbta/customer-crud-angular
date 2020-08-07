import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PhonePipe } from './pipes/phone.pipe';
import { CpfPipe } from './pipes/cpf.pipe';

import { StorageService } from './services/storage.service';

import { ListComponent } from './pages/customer/list/list.component';
import { FormComponent } from './pages/customer/form/form.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormComponent,
    PhonePipe,
    CpfPipe,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
