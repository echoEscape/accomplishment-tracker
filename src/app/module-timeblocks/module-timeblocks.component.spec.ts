import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTimeblocksComponent } from './module-timeblocks.component';

describe('ModuleTimeblocksComponent', () => {
  let component: ModuleTimeblocksComponent;
  let fixture: ComponentFixture<ModuleTimeblocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleTimeblocksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuleTimeblocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
