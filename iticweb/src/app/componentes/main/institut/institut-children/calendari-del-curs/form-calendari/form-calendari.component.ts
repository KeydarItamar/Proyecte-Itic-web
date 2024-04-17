import { Component, OnInit } from '@angular/core';
import { CalendarioServiceService } from 'src/app/services/calendario-service.service';
@Component({
  selector: 'app-form-calendari',
  templateUrl: './form-calendari.component.html',
  styleUrls: ['./form-calendari.component.css']
})
export class FormCalendariComponent implements OnInit {

  constructor(private calendarioService : CalendarioServiceService) { }

  ngOnInit(): void {
    this.setupFormListener();
  }

  setupFormListener(): void {
    const form = document.getElementById("eventoForm") as HTMLFormElement;
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Evitar el envío del formulario por defecto

      // Obtener los valores del formulario
      const formData = new FormData(form);

      // Construir el objeto Evento
      const nuevoEvento: any = {
        titulo: formData.get("titulo"),
        fecha: formData.get("fecha"),
        hora: formData.get("hora"),
        descripcion: formData.get("descripcion"),
        ubicacion: formData.get("ubicacion")
      };

      // Aquí puedes hacer lo que necesites con el nuevo evento
      console.log("Nuevo evento:", nuevoEvento);

      // Insertar el evento 
      this.insertEvento(nuevoEvento);
      form.reset();
      alert('Evento insertado en la base de datos')
    });

    
  }

  insertEvento(evento: any): void {
    this.calendarioService.createEvento(evento).subscribe({
      next: response => {
        console.log('Evento creado exitosamente', response);
      },
      error: error => {
        console.error('Error al crear el evento:', error);
      }
    });
  }

}
