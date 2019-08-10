import { Component } from '@angular/core';
import { pipe } from 'rxjs';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private productService: ProductService, private cartService: CartService) {

  }

  async createProduct() {
    const croduct = {
      "name": "Premium Quality",
      "type": "simple",
      "regular_price": "221.99",
    }
    const newProduct: any = await this.productService.create(croduct);
    console.log(newProduct);

    const result = await this.cartService.addItemToCart(newProduct.id);
    console.log(result);
  }

}
