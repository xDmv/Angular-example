import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAcardionComponent } from './multi-acardion.component';

describe('MultiAcardionComponent', () => {
  let component: MultiAcardionComponent;
  let fixture: ComponentFixture<MultiAcardionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiAcardionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiAcardionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
