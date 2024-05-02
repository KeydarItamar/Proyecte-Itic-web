import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaQuerys: string[]= []
  respuestas: string[]=[]
  resultado: string=''
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 25;
  
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }
 

  
  iaChat(query: string): void {
    // Verificar si la consulta está vacía
    if (!query.trim()) {
        // No hacer nada si la consulta está vacía
        return;
    }

    this.listaQuerys.push(query);
    console.log(typeof query);

    // Enviar la consulta al backend
    this.chatService.enviarDatosAlBackend(query)
        .subscribe({
            next: response => {
                this.resultado = response;
                this.respuestas.push(this.resultado);
            },
            error: error => {
                console.error('Error al llamar al backend:', error);
            }
        });
        
        // Desplazar hacia abajo después de recibir la respuesta
        setTimeout(() => {
          const responseContainer = document.getElementById('response-container');
          if (responseContainer) {
              responseContainer.scrollTop = responseContainer.scrollHeight;
          }
      }, 0);

    // Limpiar el campo de entrada
    query = '';
}


}
