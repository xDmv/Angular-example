import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAccardionComponent } from './multi-accardion.component';

describe('MultiAccardionComponent', () => {
  let component: MultiAccardionComponent;
  let fixture: ComponentFixture<MultiAccardionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiAccardionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiAccardionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
