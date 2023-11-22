import { TestBed } from '@angular/core/testing';

import { FormService } from './form.service';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form.component';

// describe('AppComponent', () => {
  //   beforeEach(() => TestBed.configureTestingModule({
  //     imports: [RouterTestingModule],
  //     declarations: [AppComponent]
  //   }));

  describe('FormService', () => {
    beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [FormComponent],
      providers: [HttpClientModule]
    }));
  let service: FormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
