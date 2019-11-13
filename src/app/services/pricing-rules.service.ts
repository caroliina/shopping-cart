import { Injectable } from '@angular/core';
import { PricingRule } from '../entities/pricing-rule.entity';
import { Product } from '../entities/product.entity';

@Injectable()
export class PricingRulesService {
  private pricingRules: PricingRule[];

  constructor(
  ) {
    this.pricingRules = [
      { id: 'CAP', name: 'Cap 2-for-1 promotion', function: this.capRule(), discount: 0 },
      { id: 'SHIRT', name: 'T-Shirt bulk discount', function: this.shirtRule(), discount: 0 },
      { id: 'MUG', name: 'Mug discount', function: this.mugRule(), discount: 0 }
    ]
  }

  getPricingRules(): PricingRule[] {
    return this.pricingRules;
  }

  findPricingRule(id: string): PricingRule {
    return this.pricingRules.find(x => x.id == id);
  }

  private capRule(): any {
    return function(p: Product, pr: PricingRule) {
      let capsQuantity = p.quantity;
      let capsPrice = p.price;
      let discount = 0;
      if (capsQuantity >= 2) {
        if (capsQuantity % 2 === 0) {
          discount = (capsQuantity * capsPrice) / 2;
        } else {
          discount = ((capsQuantity * capsPrice) - capsPrice) / 2;
        }
      }
      pr.discount = discount;
      return discount;
    };
  }

  private shirtRule(): any {
    return function(p: Product, pr: PricingRule) {
      const discountPercentage = 5;
      let shirtsQuantity = p.quantity;
      let shirtsPrice = p.price;
      let discount = 0;
      if (shirtsQuantity >= 3) {
        discount = ((shirtsQuantity * shirtsPrice) * discountPercentage) / 100;
      }
      pr.discount = discount;
      return discount;
    }
  }

  private mugRule(): any {
    return function(p: Product, pr: PricingRule) {
      let discount = 0;
      pr.discount = discount;
      return discount;
    }
  }

}
