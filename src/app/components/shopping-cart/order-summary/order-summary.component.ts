import { Component, Input } from '@angular/core';
import { PricingRule } from '../../../entities/pricing-rule.entity';

@Component({
  selector: 'order-summary',
  templateUrl: 'order-summary.component.html',
  styleUrls: ['order-summary.component.css']
})

export class OrderSummaryComponent {
  @Input() values: any = [];
  @Input() productsCount: number;
  @Input() pricingRules: PricingRule[];
}
