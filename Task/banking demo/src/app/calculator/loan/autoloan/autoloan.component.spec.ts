import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoloanComponent } from './autoloan.component';

describe('AutoloanComponent', () => {
  let component: AutoloanComponent;
  let fixture: ComponentFixture<AutoloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
