import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoTimeboxComponent } from './co-timebox.component';

describe('CoTimeboxComponent', () => {
  let component: CoTimeboxComponent;
  let fixture: ComponentFixture<CoTimeboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoTimeboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoTimeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
