import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private coCart: string = 'wp-json/wc/v2/cart'
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.wordPressUrl;
  }

  public getAllCartItems(): Observable<any> {
    return this.http.get<any>(this.coCart);
  }

  public addItemToCart(id: number, quantity: number = 1) {
    const item = {
      "product_id": id,
      "quantity": quantity
    }
    return this.http.post<any>(`${this.url}/${this.coCart}/add`, item).toPromise();
  }


  public deleteItemFromCart(cartItemKey: string) {
    const item = {
      "cart_item_key": cartItemKey,
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: item
    };

    return this.http.delete(`${this.coCart}/cart-item`, httpOptions).toPromise();
  }

  public updateItemFromCart(cartItemKey: string) {
    const item = {
      "cart_item_key": cartItemKey,
      "quantity": 200
    }
    return this.http.post<any>(`${this.coCart}/cart-item`, item);
  }

}