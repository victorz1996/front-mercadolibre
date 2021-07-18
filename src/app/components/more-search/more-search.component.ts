import { Component } from '@angular/core';
import { MercadoLibreService } from 'src/app/services/mercado-libre.service';

@Component({
  selector: 'app-more-search',
  templateUrl: './more-search.component.html',
  styleUrls: ['./more-search.component.css'],
})
export class MoreSearchComponent {
  moreSearch: any = [];
  // Array con opciones de responsive para el elemento carousel de PrimeNG
  responsiveOptions:Array<any> = [
    {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
    }
];
  constructor(private mercadolibre: MercadoLibreService) {
    this.getProductsByCategory();
  }

  // Metodo que llama el servicio para obtener productos por categoria
  getProductsByCategory() {
    this.mercadolibre.getProductsByCategory().subscribe((res: any) => {
      if (res) {
        this.moreSearch = res;
      }
    });
  }
}
