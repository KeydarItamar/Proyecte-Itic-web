import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var tinymce: any;

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent implements OnInit {
  editorVisible: boolean = false;
  initialContent: string = ''; // Guarda el contenido inicial del editor

  constructor() { }

  ngOnInit(): void {
  }

  mostrarEditor() {
    this.editorVisible = true;
    document.body.style.overflow = 'hidden'; // Evitar el desplazamiento de la página
  }

  cerrarEditor() {
    this.editorVisible = false;
    document.body.style.overflow = ''; // Restaurar el desplazamiento de la página
  }

  cancelarEdicion() {
    this.cerrarEditor();
  }

  editarContent(entryContent: HTMLElement) {
    const editorContent = tinymce.get('editor').getContent();
    entryContent.innerHTML = editorContent;
    this.cerrarEditor();
  }
}
