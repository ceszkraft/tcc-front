import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should validate first anchor (registrar-se)', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const height = bannerDe.query(By.css('header'))
    const validateHeight: HTMLElement = height.nativeElement;
    expect(validateHeight.textContent).toContain('Registrar-se');
  });


});

