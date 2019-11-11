import { Injectable } from '@angular/core';
import { Discount } from '../entities/discount.entity';
import { ProductService } from './product.service';
import { Product } from '../entities/product.entity';

@Injectable()
export class DiscountsService {
  private discounts: Discount[];

  constructor(
    private productService: ProductService
  ) {
    this.discounts = [
      { id: '1', type: 'CAP', name: 'Cap 2-for-1 promotion' },
      { id: '2', type: 'SHIRT', name: 'T-Shirt bulk discount' }
    ];
  }

  findDiscountName(type: string): string {
    return this.discounts.find(x => x.type == type).name;
  }

  checkBulkDiscountShirtPromotion(p: Product[]): number {
    let products = this.productService.findAll();
    let shirtsQuantity = products.find(x => x.type == 'SHIRT').quantity;
    if (shirtsQuantity >= 2) {
      return shirtsQuantity;
    } else {
      return 0;
    }
  }

  checkTwoForOneCapPromotion(p: Product[]): number {
    let products = this.productService.findAll();
    let capsQuantity = products.find(x => x.type == 'CAP').quantity;
    let capsPrice = products.find(x => x.type == 'CAP').price;

    if (capsQuantity >= 2) {
      if (capsQuantity % 2 === 0) {
        return (capsQuantity * capsPrice) / 2;
      } else {
        return ((capsQuantity * capsPrice) - capsPrice) / 2;
      }
    } else {
      return 0;
    }
  }

}
