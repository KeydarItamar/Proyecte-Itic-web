import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendariDelCursComponent } from './calendari-del-curs.component';

describe('CalendariDelCursComponent', () => {
  let component: CalendariDelCursComponent;
  let fixture: ComponentFixture<CalendariDelCursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendariDelCursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendariDelCursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
