import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'front-mercadolibre';
  searchText:string = ''

  reciveSearch(event:string){
    this.searchText = event
  }
}
