import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

   
  private baseUrl = 'http://localhost:3000'; 
  constructor(private http: HttpClient) { }

  // Método para obtener una noticia por su ID
  getNoticia(id: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/getNoticia`, { id });
  }

  // Método para insertar una nueva noticia
  insertNoticia(nuevaNoticia: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/insertNoticia`, nuevaNoticia);
  }


  deleteNoticia(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/deleteNoticia/${id}`);
  }

  // Método para subir imágenes al servidor
  subirImagenes(formulario: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/subirImagenes`, formulario);
  }

}
