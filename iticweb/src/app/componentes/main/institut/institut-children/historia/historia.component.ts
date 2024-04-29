import { Component, OnInit } from '@angular/core';
import { ContenidoService } from 'src/app/services/contenido.service';
declare var tinymce: any;

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  editorVisible: boolean = false;
  initialContent: string = ''; // Guarda el contenido inicial del editor
  contenido!: string;
  objeto_content!: object;
  constructor(private content:  ContenidoService ) { }

  ngOnInit(): void {
    this.cargarContenido()
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
    const editorContent = tinymce.get('editor2').getContent();
    entryContent.innerHTML = editorContent;
    this.subirContenido(1, editorContent)
    this.cerrarEditor();
  }

  cargarContenido(){
    this.content.getArticuloById(2).subscribe({
    next:response =>{
      this.objeto_content = response
      this.contenido = response.contenido
      console.log(this.contenido)
    },
    error:error => {
      console.error('Error al llamar al backend');
  }
    })}

  subirContenido(id: number, contenido: string){
    this.content.updateArticulo(id, contenido).subscribe({
      next: response => {
          console.log(response)
          alert('Se ha editado correctamente el articulo.')
      },
      error: error =>{
        console.log('Ha habido un error, no se ha actualizado el articulo.' + error)
      }
    })
  }


}
