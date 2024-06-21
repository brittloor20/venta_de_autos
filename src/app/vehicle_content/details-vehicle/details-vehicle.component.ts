import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiculosService } from '../vehicles.services';


@Component({
  selector: 'app-details-vehicle',
  templateUrl: './details-vehicle.component.html',
  styleUrl: './details-vehicle.component.css'
})
export class DetailsVehicleComponent {
  vehicle: any = {};
  constructor (
    private route: ActivatedRoute,
    private service: VehiculosService
  ) {}

  ngOnInit (): void {
    this.route.params.subscribe((params) => {
      this.service.getVehicleById(params['id']).subscribe((respuesta: any) => {
        this.vehicle = respuesta?.data;
      });
    });
  }

}
