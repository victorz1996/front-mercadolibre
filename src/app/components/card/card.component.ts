import { Component, Input, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() products:any

  faShoppingCart = faShoppingCart

  constructor() {
    setTimeout(() => {
    console.log(this.products, 'productos en card')
      
    }, 1000);
   }

  ngOnInit(): void {
  }

}
