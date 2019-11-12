import { PricingRule } from '../../entities/pricing-rule.entity';
import { Product } from '../../entities/product.entity';

export class Checkout {
  private values = {
    total: 0,
    discount: 0
  }
  private scanned: Product[] = [];

  constructor(
    private pricingRules: PricingRule[]
  ) {
  }

  scan(p: Product): void {
    let pricingRule = this.pricingRules.filter(x => x.id == p.id)[0];
    let getDiscount = pricingRule.function;
    p.discount = getDiscount(p, pricingRule);
    this.updateScannedProducts(p);
  }

  total(): any {
    this.values.discount = this.scanned.reduce((prev, cur) => prev + cur.discount, 0);
    this.values.total = this.scanned.reduce((prev, cur) => prev + cur.price * cur.quantity, 0);
    return this.values;
  }

  private updateScannedProducts(product: Product): void {
    const index = this.scanned.findIndex((p) => p.id === product.id);
    index === -1 ? this.scanned.push(product) : this.scanned[index] = product;
  }

}
