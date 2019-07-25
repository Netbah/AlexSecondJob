import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private url: string = '/wp-json/wc/v2/cart'

  constructor(private http: HttpClient) { }

  public getAllCardItems(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  public addItemToCard(){
    const item = {
      "product_id": 25,
      "quantity": 100
    }
    return this.http.post<any>(`${this.url}/add`, item);
  }

  
  public deleteItemFromCard(){
    const item = {
      "cart_item_key": "8e296a067a37563370ded05f5a3bf3ec",
    }
    return this.http.post<any>(`${this.url}/cart-item`, item);
  }

  public updateItemFromCard(){
    const item = {
      "cart_item_key": "8e296a067a37563370ded05f5a3bf3ec",
      "quantity": 200
    }
    return this.http.post<any>(`${this.url}/cart-item`, item);
  }

}
