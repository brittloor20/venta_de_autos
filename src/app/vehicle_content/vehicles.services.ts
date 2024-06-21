import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VehiculosService {
  url: string = 'https://epico.gob.ec/vehiculo/public/api/';
  constructor(private http: HttpClient) {}

getVehicles() {
    return this.http.get(this.url + 'vehicle/');
}
postVehicle(vehicle: any) {
    return this.http.post(this.url + 'vehicle/', vehicle);
}
deleteVehicle(id: string) {
    return this.http.delete(this.url + 'vehicle/' + id);
}
getVehicleById(id: string) {
    return this.http.get(this.url + 'vehicle/' + id);
}

updateVehicle(id: string, vehicle: any) {
    return this.http.put(this.url + 'vehicle/' + id, vehicle);
}
}