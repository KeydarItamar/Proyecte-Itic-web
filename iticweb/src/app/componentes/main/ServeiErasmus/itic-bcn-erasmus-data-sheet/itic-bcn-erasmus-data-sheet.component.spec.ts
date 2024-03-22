import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IticBcnErasmusDataSheetComponent } from './itic-bcn-erasmus-data-sheet.component';

describe('IticBcnErasmusDataSheetComponent', () => {
  let component: IticBcnErasmusDataSheetComponent;
  let fixture: ComponentFixture<IticBcnErasmusDataSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IticBcnErasmusDataSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IticBcnErasmusDataSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
