import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffTransactionsComponent } from './off-transactions.component';

describe('OffTransactionsComponent', () => {
  let component: OffTransactionsComponent;
  let fixture: ComponentFixture<OffTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
