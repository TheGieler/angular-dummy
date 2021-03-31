import { Injectable } from '@angular/core';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  addToCart(product): void{
    this.items.push(product)
  }

  constructor() { }
}
