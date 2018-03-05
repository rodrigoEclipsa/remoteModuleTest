import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificoTestWrappingComponent } from './especifico-test-wrapping.component';

describe('EspecificoTestWrappingComponent', () => {
  let component: EspecificoTestWrappingComponent;
  let fixture: ComponentFixture<EspecificoTestWrappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecificoTestWrappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecificoTestWrappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
