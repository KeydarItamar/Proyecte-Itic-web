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

    // Dividir la cadena en subcadenas cada 20 caracteres
    // const chunks = query.match(/.{1,50}/g);

    // // Verificar si la división es necesaria (la longitud de la cadena es mayor que 20)
    // if (chunks && chunks.length > 1) {
    //   // Unir las subcadenas con <br> para insertar saltos de línea cada 20 caracteres
    //   query = chunks.join('<br>');
    // }
    // Agregar la consulta a listaQuerys
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
