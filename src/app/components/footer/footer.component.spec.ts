import { type ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {

  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create component', () => {

    expect(component).toBeTruthy();

  });
  it('should validate assets path (instagram)', () => {

    expect(component.links[0].instagram.instagramImg)
      .toEqual('assets/footer/instagram.svg');

  });
  it('should validate assets anchor (instagram)', () => {

    expect(component.links[0].instagram.instagramAnchor)
      .toEqual('https://www.instagram.com/');

  });

  it('should validate assets alt (instagram)', () => {

    expect(component.links[0].instagram.instagramAlt)
      .toEqual('Instagram logo');

  });

});
