import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarioServiceService } from 'src/app/services/calendario-service.service';
interface  Day {
  id: number;
  titulo: string;
  fecha: Date;
  hora: string;
  descripcion: string;
  ubicacion: string;

}



@Component({
  selector: 'app-calendari-del-curs',
  templateUrl: './calendari-del-curs.component.html',
  styleUrls: ['./calendari-del-curs.component.css']
})
export class CalendariDelCursComponent implements OnInit {
 numDay: number = 17
eventos: Day[] = []

  constructor(private calendar : CalendarioServiceService) { }

  ngOnInit(): void {
    // this.getAllEventos()
  }

  currentDate: Date = new Date();
  currentMonth: number = this.currentDate.getMonth();
  currentYear: number = this.currentDate.getFullYear();

  getDaysInMonth(month: number, year: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  getFirstDayOfMonth(month: number, year: number): number {
    return new Date(year, month, 1).getDay();
  }

  getMonthName(month: number): string {
    const monthNames = ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'];
    return monthNames[month];
  }

  getCalendar(): number[][] {
    const daysInMonth = this.getDaysInMonth(this.currentMonth, this.currentYear);
    const firstDayOfWeek = this.getFirstDayOfMonth(this.currentMonth, this.currentYear);

    let weeks: number[][] = [[]];
    let currentWeekIndex = 0;

    for (let i = 1; i <= daysInMonth; i++) {
      if (i === 1 && firstDayOfWeek > 0) {
        weeks[currentWeekIndex] = new Array(firstDayOfWeek).fill(null);
      }

      weeks[currentWeekIndex].push(i);

      if ((i + firstDayOfWeek) % 7 === 0 && i !== daysInMonth) {
        currentWeekIndex++;
        weeks[currentWeekIndex] = [];
      }
    }

    return weeks;
  }

  weeks: number[][] = this.getCalendar();

   // Método para avanzar un mes
   nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.weeks = this.getCalendar();
  }

  // Método para retroceder un mes
  previousMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.weeks = this.getCalendar();
  }

  // getAllEventos() {
  //   this.calendar.getAllEventos().subscribe({
  //     next: (response: Day[]) => {
  //       response.forEach(evento => {
  //         const fechaEvento = new Date(evento.fecha);
  //         const dayOfMonth = fechaEvento.getDate();
  //         const month = fechaEvento.getMonth();
  //         const year = fechaEvento.getFullYear();
  
  //         // Busca el día correspondiente en la matriz weeks
  //         this.weeks.forEach(week => {
  //           week.forEach(day => {
  //             if (day === dayOfMonth && day.month === month && day.year === year) {
  //               // Agrega el título del evento al día correspondiente
  //               day.titulo = evento.titulo;
  //               day.hora = evento.hora;
  //               day.descripcion = evento.descripcion;
  //               day.ubicacion = evento.ubicacion;
  //             }
  //           });
  //         });
  //       });
  //     },
  //     error: error => {
  //       console.log(`Error al obtener los eventos: ${error}`);
  //     }
  //   });
  // }
  

}
