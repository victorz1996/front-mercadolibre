import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MercadoLibreService } from 'src/app/services/mercado-libre.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnChanges {
  @Input() text:string = '';
  products:any = []
  loading:boolean = false

  constructor(private mercadolibre: MercadoLibreService) {}

  getSearch() {
    if (this.text.length) {
      this.loading = true
      this.mercadolibre.getProductsBySearch(this.text).subscribe(item =>{
        console.log(item,'datos')
        this.products = item
        this.loading = false
      });
    }
  }

  ngOnChanges(changes: SimpleChanges){
    this.getSearch()
  }
}
