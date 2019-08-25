import { Component, OnInit } from '@angular/core';
import { IIngredient } from '../../models/IIngredient';
import { IngredientService } from '../services/ingredient.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductDto } from 'src/app/models/ProductDto';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  ingredients: IIngredient[]
  price: number;

  constructor(private ingredientService: IngredientService, private cartService: CartService, private productService: ProductService) { }

  ngOnInit() {
    this.ingredientService.$ingridients.subscribe((items: IIngredient[]) => {
      this.ingredients = items;
      const array = items.map(i => i.price);
      this.price = array.reduce((total, num) => {
        return total + num;
      }, 0)
    })
  }

  delete(item) {
    this.ingredientService.remove(item);
  }

 async addToCard(){
   const newProduct:ProductDto = {
    "name": "Our new Mixed product",
    "type": "simple",
    "regular_price": `${this.price}`,
    "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
    "short_description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    "categories": [
      {
        "id": 9
      },
      {
        "id": 14
      }
    ],
    "images": [
      {
        "src": "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_front.jpg",
        "position": 0
      },
      {
        "src": "http://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2013/06/T_2_back.jpg",
        "position": 1
      }
    ]
  };
    const item:any = await this.productService.create(newProduct)
    
    this.cartService.addItemToCart(item.id)
 }

}
