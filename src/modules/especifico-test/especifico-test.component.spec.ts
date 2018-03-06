import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecificoTestComponent } from './especifico-test.component';

describe('EspecificoTestComponent', () => {
  let component: EspecificoTestComponent;
  let fixture: ComponentFixture<EspecificoTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecificoTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecificoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
