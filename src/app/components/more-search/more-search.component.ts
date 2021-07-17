import { Component } from '@angular/core';
import { MercadoLibreService } from 'src/app/services/mercado-libre.service';

@Component({
  selector: 'app-more-search',
  templateUrl: './more-search.component.html',
  styleUrls: ['./more-search.component.css'],
})
export class MoreSearchComponent {
  moreSearch: any = [];
  constructor(private mercadolibre: MercadoLibreService) {
    this.getMoreShearched();
  }
  getMoreShearched() {
    this.mercadolibre.getMoreShearch().subscribe((resp: any) => {
      if (resp && resp.length) {
        const keywords: Array<string> = resp.map((item: any) => item.keyword);
      }
    });
  }
}
