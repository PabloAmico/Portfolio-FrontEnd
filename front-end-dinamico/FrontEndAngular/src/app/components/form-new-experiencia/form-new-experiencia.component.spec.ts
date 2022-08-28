import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewExperienciaComponent } from './form-new-experiencia.component';

describe('FormNewExperienciaComponent', () => {
  let component: FormNewExperienciaComponent;
  let fixture: ComponentFixture<FormNewExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
