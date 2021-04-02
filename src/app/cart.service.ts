import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
  private http: HttpClient
  ) { }

  items = [];

  addToCart(product): void{
    this.items.push(product);
  }

  getItems(): Product[]{
    return this.items;
  }

  clearCart(): Product[]{
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
