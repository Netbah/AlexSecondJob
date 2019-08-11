import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string;


  constructor(private http: HttpClient) {
    this.url = environment.backendUrl;
  }

  create(product) {
    return this.http.post(this.url + '/api/product', product).toPromise();
  }
}
