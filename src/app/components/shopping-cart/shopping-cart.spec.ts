import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ShoppingCartComponent } from './shopping-cart.component';
import { AppModule } from '../../app.module';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(ShoppingCartComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Shopping cart'`, () => {
    element = fixture.nativeElement.querySelector('h1');
    fixture.detectChanges();
    expect(element.textContent).toContain('Shopping cart');
  });

  it('should include three different products', () => {
    fixture.detectChanges();
    const products = fixture.debugElement.queryAll(By.css('.product-description h1'));
    expect(products[0].nativeElement.textContent.trim()).toBe('Shirt');
    expect(products[1].nativeElement.textContent.trim()).toBe('Mug');
    expect(products[2].nativeElement.textContent.trim()).toBe('Cap');
  });

});
