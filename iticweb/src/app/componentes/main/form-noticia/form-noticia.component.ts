import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from '../../noticias/noticia-detalle/noticia';
import { NoticiasService } from 'src/app/noticias.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form-noticia',
  templateUrl: './form-noticia.component.html',
  styleUrls: ['./form-noticia.component.css']
})
export class FormNoticiaComponent implements OnInit {
  id!: number;
  editing: boolean = false; 


  constructor(private noticiaService: NoticiasService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // Convertir el parámetro a número
      this.editing= params['editing']
      console.log('log del nuevo componente: id: ' + this.id);
      console.log('log del editing: ' + this.editing);
      this.setupFormListener();
    });
    }


  setupFormListener(): void {
    const form = document.getElementById("noticiaForm") as HTMLFormElement;
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Evitar el envío del formulario por defecto
  
      // Obtener los valores del formulario
      const formData = new FormData(form);
      const formDataFoto = new FormData();
  
      // Obtener el nombre de la foto de portada
      const fotoPortadaInput = document.getElementById("fotoPortada") as HTMLInputElement;
      const fotoPortadaFile = fotoPortadaInput.files && fotoPortadaInput.files[0]; // Obtener el primer archivo seleccionado
      const fotoPortadaNombre = fotoPortadaFile ? fotoPortadaFile.name : ''; // Obtener el nombre del archivo o cadena vacía si no se seleccionó ningún archivo
  
      // Obtener los nombres de archivo para las otras fotos
      const foto1Input = document.getElementById("foto1") as HTMLInputElement;
      const foto1File = foto1Input.files && foto1Input.files[0];
      const foto1Nombre = foto1File ? foto1File.name : '';
  
      const foto2Input = document.getElementById("foto2") as HTMLInputElement;
      const foto2File = foto2Input.files && foto2Input.files[0];
      const foto2Nombre = foto2File ? foto2File.name : '';
  
      const foto3Input = document.getElementById("foto3") as HTMLInputElement;
      const foto3File = foto3Input.files && foto3Input.files[0];
      const foto3Nombre = foto3File ? foto3File.name : '';

            // Agregar las imágenes al FormData
      if (fotoPortadaInput.files && fotoPortadaInput.files.length > 0) {
        formDataFoto.append('files', fotoPortadaInput.files[0]);
      }
      if (foto1Input.files && foto1Input.files.length > 0) {
        formDataFoto.append('files', foto1Input.files[0]);
      }
      if (foto2Input.files && foto2Input.files.length > 0) {
        formDataFoto.append('files', foto2Input.files[0]);
      }
      if (foto3Input.files && foto3Input.files.length > 0) {
        formDataFoto.append('files', foto3Input.files[0]);
      } 

      // Construir el objeto Noticia
      const nuevaNoticia: Noticia = {
        titulo: formData.get("titulo") as string,
        subtitulo: formData.get("subtitulo") as string,
        parrafo1: formData.get("parrafo1") as string,
        parrafo2: formData.get("parrafo2") as string,
        parrafo3: formData.get("parrafo3") as string,
        fotoPortada: fotoPortadaNombre, // Usar el nombre del archivo seleccionado
        foto1: foto1Nombre,
        foto2: foto2Nombre,
        foto3: foto3Nombre,
        noticiaFijada: (formData.get("noticiaFijada") === "on")
      };
  
      // Aquí puedes hacer lo que necesites con la nueva noticia
      console.log("Nueva noticia:", nuevaNoticia);
      // console.log("Nombre de la foto de portada:", fotoPortadaNombre);
      // console.log("Nombre de la foto 1:", foto1Nombre);
      // console.log("Nombre de la foto 2:", foto2Nombre);
      // console.log("Nombre de la foto 3:", foto3Nombre);
     
      if(this.editing){
        // this.updateNoticia(nuevaNoticia,this.idNoticiaUpdate)
      }else{
        this.subirFoto(formDataFoto)
        this.insertForm(nuevaNoticia)
      }
    });
  }

  insertForm(formData: Noticia){
    this.noticiaService.insertNoticia(formData).subscribe({
      next: response => {
        console.log('Se ha insertado correctamente en la base de datos', response);
      },
      error: error => {
        console.log(`Error al subir la noticia : ${error} `)
      }
    })
  }

  subirFoto(formulario: FormData) {
    this.noticiaService.subirImagenes(formulario).subscribe({
      next: response => {
        console.log('Imágenes subidas exitosamente:', response);
      },
      // error : error => {
      //   console.error('Error al subir imágenes:', error);
      // }
  });
  }

  // updateNoticia(nuevaNoticia, id){
  //   this.noticiaService.updateNoticia(nuevaNoticia, id).subscribe({
  //     next: response =>{
  //       console.log(response)
  //     },
  //     error: error => {
  //       console.error('Error al actualizar la noticia: ' + error)
  //     }
  //   })
  // }


}
