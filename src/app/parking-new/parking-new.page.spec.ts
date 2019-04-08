import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingNewPage } from './parking-new.page';

describe('ParkingNewPage', () => {
  let component: ParkingNewPage;
  let fixture: ComponentFixture<ParkingNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingNewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
