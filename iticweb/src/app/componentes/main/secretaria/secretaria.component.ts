import {Component, OnInit, ElementRef, ViewChild } from '@angular/core';

declare var tinymce: any;

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent implements OnInit {
  //contenidoInicial: string = "adasdas"; // Definir la propiedad contenidoInicial

  @ViewChild('entryContent', { static: true }) entryContentRef!: ElementRef; // Inicializar entryContentRef

  constructor() { }

  ngOnInit(): void {
    tinymce.get("editor").setContent(document.getElementById("entry-content")?.innerHTML)
  }
}
