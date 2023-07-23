import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyTablePopupComponent } from './empty-table-popup.component';

describe('EmptyTablePopupComponent', () => {
  let component: EmptyTablePopupComponent;
  let fixture: ComponentFixture<EmptyTablePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyTablePopupComponent]
    });
    fixture = TestBed.createComponent(EmptyTablePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
