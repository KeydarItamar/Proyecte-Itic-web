import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Método para crear un nuevo artículo
  createArticulo(articulo: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/createArticulo`, articulo);
  }

  // Método para actualizar un artículo por su ID
  updateArticulo(id: number, articulo: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/updateArticulo`, {"id": id, "articulo": articulo});
  }

  // Método para obtener todos los artículos
  getAllArticulos(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getAllArticulos`);
  }

  // Método para obtener un artículo por su ID
  getArticuloById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getArticulo/${id}`);
  }

  // Método para eliminar un artículo por su ID
  deleteArticulo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/deleteArticulo/${id}`);
  }

}
