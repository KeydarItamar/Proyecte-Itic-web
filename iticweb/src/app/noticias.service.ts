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
  // Método para obtener todas las noticias
  getAllNoticias(): Observable<any> {
    console.log('entrando en service')
    return this.http.get<any>(`${this.baseUrl}/getAllNoticias`);
  }

  // Método para insertar una nueva noticia
  insertNoticia(nuevaNoticia: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/insertNoticia`, nuevaNoticia);
  }

  // Método para actualizar una noticia existente
  updateNoticia(noticia: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/updateNoticia/${noticia.id}`, noticia);
  }

  deleteNoticia(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/deleteNoticia/${id}`);
  }

  // Método para subir imágenes al servidor
  subirImagenes(formulario: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/subirImagenes`, formulario);
  }


  createTables(): Observable<any> {
    console.log('entrando en service para create table')
    return this.http.get<any>(`${this.baseUrl}/createTablas`);
  }


}
