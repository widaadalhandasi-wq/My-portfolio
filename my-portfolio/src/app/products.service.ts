import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  products: Product[] = [
    {
      id: 1111,
      name: "Tv",
      price: 200,
      used: true
    },
    {
      id: 2222,
      name: "Iphone",
      price: 300,
      used: true
    }, {
      id: 3333,
      name: "Ac",
      price: 250,
      used: true
    }, {
      id: 4444,
      name: "fan ",
      price: 100,
      used: false
    }

  ]
}
