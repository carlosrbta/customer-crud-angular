import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: any[] = [];

  show(textOrTpl: string | TemplateRef<any>, options: any = {}): void {
    this.toasts.push({ textOrTpl, ...options });
  }

  remove(toast): void {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }

  showSuccess(textOrTpl: string | TemplateRef<any>, options: any = {}): void {
    this.show(textOrTpl, {
      ...options,
      classname: 'bg-success text-light',
    });
  }

  showError(textOrTpl: string | TemplateRef<any>, options: any = {}): void {
    this.show(textOrTpl, {
      ...options,
      classname: 'bg-danger text-light',
    });
  }
}
