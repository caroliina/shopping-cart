import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

  private products: Product[];

  constructor() {
    this.products = [
      { id: 'SHIRT', name: 'Shirt', price: 20, photo: 'shirt.png', quantity: 0, discount: 0 },
      { id: 'MUG', name: 'Mug', price: 7.50, photo: 'mug.png', quantity: 0, discount: 0 },
      { id: 'CAP', name: 'Cap', price: 5, photo: 'cap.png', quantity: 0, discount: 0 }
    ];
  }

  findAll(): Product[] {
    return this.products;
  }
}
