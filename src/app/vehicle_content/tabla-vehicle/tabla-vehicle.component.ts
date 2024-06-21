import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../vehicles.services';

@Component({
  selector: 'app-tabla-vehicle',
  templateUrl: './tabla-vehicle.component.html',
  styleUrl: './tabla-vehicle.component.css'
})
export class TablaVehicleComponent implements OnInit {
  
  vehicle: any = [];
  marca = '';
  codigo = '';

  constructor(private service: VehiculosService){}

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles() {
    this.service.getVehicles().subscribe((respuesta: any) => {
      this.vehicle = respuesta?.data;
    });
  }
  crearVehicles() {
    const newVehicle = {
      codigo: this.codigo,
      marca: this.marca,
      modelo: 'hyundai',
      color: 'rojo',
      anio: '2016',
      kilometraje: 1200,
      precio: 45000,
      calificacion: 5,
    };

     this.service.postVehicle(newVehicle).subscribe((respuesta: any)=> {
      console.log(respuesta);
      this.getVehicles();
     });
    }
    deleteVehicle(id: string){
      this.service.deleteVehicle(id).subscribe((respuesta:any)=>{
        console.log(respuesta);
        this.getVehicles();
      });
    }
}
