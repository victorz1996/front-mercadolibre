import { Component } from '@angular/core';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  faSearch = faSearch;
  faUser = faUser;
  faShoppingCart = faShoppingCart;
  menuOptions: Array<string> = [
    'Hombre',
    'Mujer',
    'Junior',
    'Niños',
    'Accesorios',
    'Ofertas',
  ];
  constructor() {}
}
