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
    this.listaQuerys.push(query)
    this.chatService.enviarDatosAlBackend(query)
      .subscribe({
         next: response => {
          this.resultado = response;
          this.respuestas.push(this.resultado)
        },
        error: error => {
          console.error('Error al llamar al backend:', error);
        }
       });
    query = '';
  }


}
