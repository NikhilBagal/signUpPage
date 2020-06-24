import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSecComponent } from './form-sec.component';

describe('FormSecComponent', () => {
  let component: FormSecComponent;
  let fixture: ComponentFixture<FormSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
