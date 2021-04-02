import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  private http = HttpClient;

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

  constructor() { }
}
