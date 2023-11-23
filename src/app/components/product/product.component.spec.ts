import { type ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';

describe('ProductComponent', () => {

  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [ProductComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create component', () => {

    expect(component).toBeTruthy();

  });

  it('should validate first h2 contain "Body Building"', () => {

    const document: HTMLElement = fixture.nativeElement;
    const h2 = document.querySelector('h2');
    expect(h2?.textContent).toEqual('Body Building');

  });

  it('should validate links array.length', () => {

    expect(component.links.length).toEqual(7);

  });

  it('should validate h2 as first child', () => {

    const document: HTMLElement = fixture.nativeElement;
    const enterOnCardContent = document.querySelector('.card-content');
    const lastChild = enterOnCardContent?.firstChild?.nodeName;
    expect(lastChild).toEqual('H2');

  });

  it('should validate A as last child', () => {

    const document: HTMLElement = fixture.nativeElement;
    const enterOnCardContent = document.querySelector('.card-content');
    const lastChild = enterOnCardContent?.lastChild?.nodeName;
    expect(lastChild).toEqual('A');

  });

});
