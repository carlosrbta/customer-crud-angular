import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const brandsUrl = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';
const modelsUrl = (brand) =>
  `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos`;

@Injectable({
  providedIn: 'root',
})
export class FipeService {
  constructor(private http: HttpClient) {}

  getBrands(): Observable<any> {
    return this.http.get(brandsUrl);
  }

  getModel(brand: any): Observable<any> {
    return this.http.get(modelsUrl(brand));
  }
}
