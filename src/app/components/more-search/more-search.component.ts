import { Component } from '@angular/core';
import { MercadoLibreService } from 'src/app/services/mercado-libre.service';

@Component({
  selector: 'app-more-search',
  templateUrl: './more-search.component.html',
  styleUrls: ['./more-search.component.css'],
})
export class MoreSearchComponent {
  moreSearch: any = [];
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

  getProductsByCategory() {
    this.mercadolibre.getProductsByCategory().subscribe((res: any) => {
      if (res) {
        this.moreSearch = res;
      }
    });
  }
}
