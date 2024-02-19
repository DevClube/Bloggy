import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneCardComponent } from './zone-card.component';

describe('ZoneCardComponent', () => {
  let component: ZoneCardComponent;
  let fixture: ComponentFixture<ZoneCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZoneCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoneCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
