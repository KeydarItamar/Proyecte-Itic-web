import { Component, OnInit } from '@angular/core';
import { CalendarioServiceService } from 'src/app/services/calendario-service.service';
interface  Day {
  Day : number;
  Month: number;
  year: number;
  tittle: string;
  hour: string;
  description: string;
  place: string;
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
    this.getAllEventos()
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


  getAllEventos(){
    this.calendar.getAllEventos().subscribe({
      next: response => {
       console.log(response)
       console.log(response[0].fecha)
       console.log(typeof(response[0].fecha))
      },
      error: error => {
        console.log(`Error al subir la noticia : ${error} `)
      }
    })
  }

}
