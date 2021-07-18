import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MercadoLibreService {
  // Codigo para ropa y accesorios = MCO1430
  codeCategory: string = 'MCO1430';
  // Codigo para pais colombia
  codeCountry: string = 'MCO';
  apiUrl: string = 'https://api.mercadolibre.com';
  constructor(private http: HttpClient) {}

  getProductsBySearch(keyword: string) {
    return this.http
      .get(
        `${this.apiUrl}/sites/${this.codeCountry}/search?category=${this.codeCategory}&q=${keyword}`
      )
      .pipe(
        map((data: any) => {
          return data.results;
        })
      );
  }

  getProductsByCategory() {
    return this.http
      .get(
        `${this.apiUrl}/sites/${this.codeCountry}/search?category=${this.codeCategory}`
      )
      .pipe(
        map((data: any) => {
          return data.results;
        })
      );
  }
}
