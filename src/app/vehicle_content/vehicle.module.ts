import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsVehicleComponent } from './details-vehicle/details-vehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { TablaVehicleComponent } from './tabla-vehicle/tabla-vehicle.component';
import { VehiculosService} from './vehicles.services';

@NgModule({
  declarations: [
    
    DetailsVehicleComponent,
    EditVehicleComponent,
    TablaVehicleComponent,
],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    VehiculosService, 
  ],
  bootstrap: [],
  
})

export class AppComponent {}