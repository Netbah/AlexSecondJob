import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addToCard() {
    console.log('test card');
    //http://localhost:8000/wp-json/wc/v2/cart
  }
}
