import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniNoticiaComponent } from './mini-noticia.component';

describe('MiniNoticiaComponent', () => {
  let component: MiniNoticiaComponent;
  let fixture: ComponentFixture<MiniNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
