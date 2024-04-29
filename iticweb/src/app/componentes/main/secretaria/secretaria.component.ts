import { Component, OnInit, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContenidoService } from 'src/app/services/contenido.service';
declare var tinymce: any;

@Component({
  selector: 'app-Texteditable',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent implements OnInit {
  @Input() id: number = 1
  editorVisible: boolean = false;
  initialContent: string = ''; // Guarda el contenido inicial del editor
  contenido!: string;
  objeto_content!: object;
  titulo!: string;
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
    const editorContent = tinymce.get('editor').getContent();
    entryContent.innerHTML = editorContent;
    this.subirContenido(this.id, editorContent)
    this.cerrarEditor();
  }

  cargarContenido(){
    this.content.getArticuloById(this.id).subscribe({
    next:response =>{
      this.objeto_content = response
      this.contenido = response.contenido
      this.titulo= response.titulo
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
