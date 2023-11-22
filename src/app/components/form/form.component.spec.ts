import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonModel } from 'src/app/model/Person';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [FormComponent]
    });
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should defaultStatusServer be falsy', () => {
    expect(component.defaultStatusServer).toBeFalsy();
  });

  it('should personModel be Object', () => {
    expect(component.personModel).toBeInstanceOf(Object);
  });
});
