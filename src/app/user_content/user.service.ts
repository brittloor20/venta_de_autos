import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:4200//users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[] | any> {
    return this.http.get(this.url);
  }

  getUserById(id: string): Observable<User | any> {
    return this.http.get(this.url + '/' + id);
  }

  deleteUser(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  updateUser(id: string, nuevosDatos: any) {
    return this.http.put(this.url + '/' + id, nuevosDatos);
  }

  addUser(nuevosDatos: any) {
    return this.http.post(this.url, nuevosDatos);
  }
}