import { Component } from '@angular/core';
import { CartService } from './services/Cart.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private cartService: CartService) {

  }

  getAllCartItems() {
    this.cartService.getAllCartItems().subscribe(
      pipe((res) => {
        console.log(res);
      })
    )
  }

  addCartItem() {
    this.cartService.addItemToCart().subscribe(
      pipe((res) => {
        console.log(res);
      })
    )
  }

  deleteCartItem() {
    this.cartService.deleteItemFromCart().subscribe(
      pipe((res) => {
        console.log(res);
      })
    )
  }

  updateCartItem() {
    this.cartService.updateItemFromCart().subscribe(
      pipe((res) => {
        console.log(res);
      })
    )
  }



}
