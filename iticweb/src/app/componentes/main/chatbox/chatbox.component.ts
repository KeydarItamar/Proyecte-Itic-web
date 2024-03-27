import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ChatService } from 'src/app/services/chat.service';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  
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

    // Agregar la consulta a listaQuerys
    this.listaQuerys.push(query);

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
