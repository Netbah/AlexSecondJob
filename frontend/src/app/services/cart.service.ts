import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private url: string = 'http://localhost/product'

  constructor(private http: HttpClient) { }

  public getAllCartItems(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  public addItemToCart() {
    const item = {
      "product_id": 25,
      "quantity": 100
    }
    return this.http.post<any>(`${this.url}`, item);
  }


  public deleteItemFromCart() {
    const item = {
      "cart_item_key": "8e296a067a37563370ded05f5a3bf3ec",
    }
    return this.http.post<any>(`${this.url}/cart-item`, item);
  }

  public updateItemFromCart() {
    const item = {
      "cart_item_key": "8e296a067a37563370ded05f5a3bf3ec",
      "quantity": 200
    }
    return this.http.post<any>(`${this.url}/cart-item`, item);
  }

}
