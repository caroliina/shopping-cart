import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: 'X7R2OPX', type: 'SHIRT', name: 'T-Shirt', price: 20, photo: 'shirt.png', quantity: 0 },
            { id: 'X2G2OPZ', type: 'MUG',  name: 'Mug', price: 7.50, photo: 'mug.png', quantity: 0 },
            { id: 'X3W2OPY',  type: 'CAP', name: 'Cap', price: 5, photo: 'cap.png', quantity: 0 }
        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}
