import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitSesionComponent } from './init-sesion.component';

describe('InitSesionComponent', () => {
  let component: InitSesionComponent;
  let fixture: ComponentFixture<InitSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
