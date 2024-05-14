import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from '../../noticias/noticia-detalle/noticia';
import { NoticiasService } from 'src/app/noticias.service';
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
      this.editing = params['editing'];

      if (this.editing) {
        this.noticiaService.getNoticia(this.id).subscribe((data) => {
          let noticia = data;
          this.setupFormFields(noticia);
        });
      }

      this.setupFormListener();
    });
  }

  setupFormFields(noticia: any): void {
    const form = document.getElementById("noticiaForm") as HTMLFormElement;
    form['titulo'].value = noticia[0].titulo;
    form['subtitulo'].value = noticia[0].subtitulo;
    form['parrafo1'].value = noticia[0].parrafo1;
    form['parrafo2'].value = noticia[0].parrafo2;
    form['parrafo3'].value = noticia[0].parrafo3;
    form['noticiaFijada'].checked = noticia[0].noticiaFijada;
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

      if(this.editing){
        console.log(this.id)
        this.updateNoticia(nuevaNoticia, this.id)
        alert("Noticia creada correctamente.")
      }else{
        this.subirFoto(formDataFoto)
        this.insertForm(nuevaNoticia)
        alert("Has creado una noticia correctamente.")
      }
    });
  }

  insertForm(formData: Noticia){
    this.noticiaService.insertNoticia(formData).subscribe({
      next: response => {
        console.log('Se ha insertado correctamente en la base de datos', response);
      },
      error: error => {
        console.log(`Error al subir la noticia : ${error} `);
      }
    });
  }

  subirFoto(formulario: FormData) {
    this.noticiaService.subirImagenes(formulario).subscribe({
      next: response => {
        console.log('Imágenes subidas exitosamente:', response);
      },
      error : error => {
        console.error('Error al subir imágenes:', error);
      }
    });
  }

  updateNoticia(nuevaNoticia: Noticia, id: number){
    this.noticiaService.updateNoticia(nuevaNoticia, id).subscribe({
      next: response => {
        console.log('Respuesta al actualizar la noticia:', response);

      },
      error: error => {
        console.error('Error al actualizar la noticia:', error);
      }
    });
  }
  
  previewUrl: any;
  previewUrlPortada: any;
  previewUrlFoto1: any;
  previewUrlFoto2: any;
  previewUrlFoto3: any;

   // Método para manejar el evento de cambio en el input de archivos
   onFileChange(event: any, num: number) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      // Se lee el archivo y se obtiene una URL de datos
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result;
        if (num === 0) { this.previewUrlPortada = this.previewUrl; }
        if (num === 1) { this.previewUrlFoto1 = this.previewUrl; }
        if (num === 2) { this.previewUrlFoto2 = this.previewUrl; }
        if (num === 3) { this.previewUrlFoto3 = this.previewUrl; }
      };
  
      reader.readAsDataURL(file); // Se lee como datos de URL
    }
  }
}