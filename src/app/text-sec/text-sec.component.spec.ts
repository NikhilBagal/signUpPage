import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSecComponent } from './text-sec.component';

describe('TextSecComponent', () => {
  let component: TextSecComponent;
  let fixture: ComponentFixture<TextSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
