import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveChangesButtonComponent } from './save-changes-button.component';

describe('SaveChangesButtonComponent', () => {
  let component: SaveChangesButtonComponent;
  let fixture: ComponentFixture<SaveChangesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveChangesButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveChangesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
