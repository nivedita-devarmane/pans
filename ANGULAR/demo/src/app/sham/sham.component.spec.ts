import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShamComponent } from './sham.component';

describe('ShamComponent', () => {
  let component: ShamComponent;
  let fixture: ComponentFixture<ShamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
