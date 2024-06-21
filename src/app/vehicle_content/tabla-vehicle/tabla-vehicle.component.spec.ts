import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaVehicleComponent } from './tabla-vehicle.component';

describe('TablaVehicleComponent', () => {
  let component: TablaVehicleComponent;
  let fixture: ComponentFixture<TablaVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaVehicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
