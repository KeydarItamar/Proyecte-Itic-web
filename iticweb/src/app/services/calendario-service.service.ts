import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CalendarioServiceService {
  constructor(private http: HttpClient) { }

  baseUrl= 'http://localhost:3000'

 // Método para crear un evento en el calendario
 createEvento(evento: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/createEvento`, evento);
}

// Método para actualizar un evento en el calendario
updateEvento(evento: any): Observable<any> {
  return this.http.put<any>(`${this.baseUrl}/updateEvento`, evento);
}

// Método para eliminar un evento del calendario por su ID
deleteEvento(id: number): Observable<any> {
  return this.http.delete<any>(`${this.baseUrl}/deleteEvento/${id}`);
}

// Método para obtener todos los eventos del calendario
getAllEventos(): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}/getAllEventos`);
}


}
