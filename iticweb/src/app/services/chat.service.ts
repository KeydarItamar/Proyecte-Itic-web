import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

constructor(private http: HttpClient) { }

apiUrl= 'http://localhost:3000'

  enviarDatosAlBackend(query: string): Observable<any> {
    return this.http.post<string>(
      `${this.apiUrl}/enviar-datos`,
      { query },
      { responseType: 'text' as 'json' } 
    );
  
  }

}
