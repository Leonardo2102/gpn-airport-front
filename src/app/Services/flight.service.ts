import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../interfaces/flight';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private api = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  get() {
    const path = this.api;
    return this.http.get<Flight[]>(path);
  }

  /*getRol() {
    const path = `${this.api}roles`;
    return this.http.get<Rol[]>(path);
  }

  updateUsuario(usuario: Usuario) {
    const path = `${this.api}${usuario.codigo}`;
    return this.http.put<Usuario>(path, usuario);
  }

  deleteUsuario(id: number) {
    const path = `${this.api}${id}`;
    return this.http.delete(path);
  }*/
}
