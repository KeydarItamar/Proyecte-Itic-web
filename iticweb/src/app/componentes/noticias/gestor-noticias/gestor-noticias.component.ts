import { Component, OnInit, Input } from '@angular/core';
import { NoticiasService } from 'src/app/noticias.service';
import { Noticia } from '../noticia-detalle/noticia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestor-noticias',
  templateUrl: './gestor-noticias.component.html',
  styleUrls: ['./gestor-noticias.component.css']
})
export class GestorNoticiasComponent implements OnInit {
  noticias: number[] = [] 

  constructor( private noticia : NoticiasService, private router: Router) { }
  noticiaDetalle = "noticiaDetalle"
  allNoticias=[]
  miniNoticia!: Noticia;
  imagen!:string;
  titulo!: string;
  subtitulo!: string;
  parrafo1!:string;
  id:number = 1;

  ngOnInit(): void {
    this.selectAllNoticias()
    this.currentIndex = 1;
  }
  currentIndex = 1;

  // Método para navegar al formulario de edición con los datos de la noticia pre-cargados
  editarNoticia(noticia: any) {
    const id = noticia["id"];
    this.noticia.getNoticia(id).subscribe({
      next: response => {
        console.log(response)
        const datosNoticia = response; // Datos de la noticia obtenidos del backend
        this.router.navigate(['/insert_noticia/:id', { 'id': id, 'editing': true }]);
      },
      error: error => {
        console.log('Error al obtener los detalles de la noticia: ' + error);
      }
    });
  }
  
  // Método para eliminar una noticia
  deleteNoticia(noticia: any) {
    if (confirm("Segur que vols esborrar la notícia?")) {
      const id = noticia["id"];
      this.noticia.deleteNoticia(id).subscribe({
        next: response => {
          console.log("Noticia borrada exitosamente.");
        },
        error: error => {
          console.error("Error al borrar la noticia:", error);
        }
      });
      window.location.reload();
    }
  }

  selectAllNoticias() {
    this.noticia.getAllNoticias().subscribe({
      next: response =>{
        this.allNoticias = response
        console.log(response)
      }, 
      error: error =>{
        console.log('error: ' + error)
      }
    })
  }
}