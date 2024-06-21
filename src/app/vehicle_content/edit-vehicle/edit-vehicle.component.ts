import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiculosService } from '../vehicles.services';
import { FormBuilder, FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrl: './edit-vehicle.component.css'
})
export class EditVehicleComponent implements OnInit {

  vehicle: any = {};
  form: FormGroup;
updateVehicle: any;

  constructor (
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private service: VehiculosService
  ) {

    this.form = this.fb.group({

      codigo: [''],
      marca: [''],
      modelo: [''],
      color: [''],
      anio: [''],
      kilometraje: [''],
      precio: [''],
      calificacion: [''],

    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.service.getVehicleById(params['id']).subscribe((respuesta:any)=>{
        this.vehicle = respuesta?.data;
        this.form = this.fb.group({
          codigo: [this.vehicle?.codigo],
          marca: [this.vehicle?.marca],
          modelo: [this.vehicle?.modelo],
          color: [this.vehicle?.color],
          anio: [this.vehicle?.anio],
          kilometraje: [this.vehicle?.kilometraje],
          precio: [this.vehicle?.precio],
          calificacion: [this.vehicle?.calificacion],
        });
      });
    });

    updateVehicle();{
      this.service
      .updateVehicle(this.vehicle.codigo, this.form.value)
      .subscribe((response)=>{
        console.log(response);
      });
    }

  }

}
function updateVehicle() {
  throw new Error('Function not implemented.');
}

