import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  query= '';
  listaQuerys: string[]= []
  respuestas: string[]=[]
  constructor() { }

  ngOnInit(): void {
  }


  iaChat(valor: string){
    this.listaQuerys.push(valor);
    this.respuestas.push('yes')
    
  }

}
