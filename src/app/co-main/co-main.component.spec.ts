import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoMainComponent } from './co-main.component';

describe('CoMainComponent', () => {
  let component: CoMainComponent;
  let fixture: ComponentFixture<CoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
