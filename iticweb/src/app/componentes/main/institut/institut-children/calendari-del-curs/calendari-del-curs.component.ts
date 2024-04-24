import { Component, OnInit } from '@angular/core';
import { CalendarioServiceService } from 'src/app/services/calendario-service.service';

interface Day {
  Day: number;
  Month: number;
  Year: number;
  Title: string;
}

@Component({
  selector: 'app-calendari-del-curs',
  templateUrl: './calendari-del-curs.component.html',
  styleUrls: ['./calendari-del-curs.component.css']
})
export class CalendariDelCursComponent implements OnInit {
  numDay: number = 17;
  eventos: Day[] = [];

  constructor(private calendar: CalendarioServiceService) { }

  ngOnInit(): void {
    this.getAllEventos();
  }

  currentDate: Date = new Date();
  currentMonth: number = this.currentDate.getMonth();
  currentYear: number = this.currentDate.getFullYear();

  selectedEvent: Day | null = null;

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

  getCalendar(): { day: number, eventTitle?: string }[][] {
    const daysInMonth = this.getDaysInMonth(this.currentMonth, this.currentYear);
    const firstDayOfWeek = this.getFirstDayOfMonth(this.currentMonth, this.currentYear);

    let weeks: { day: number, eventTitle?: string }[][] = [[]];
    let currentWeekIndex = 0;

    for (let i = 1; i <= daysInMonth; i++) {
      if (i === 1 && firstDayOfWeek > 0) {
        weeks[currentWeekIndex] = new Array(firstDayOfWeek).fill({ day: null });
      }

      let eventTitle = this.getEventTitleForDay(i);
      weeks[currentWeekIndex].push({ day: i, eventTitle });

      if ((i + firstDayOfWeek) % 7 === 0 && i !== daysInMonth) {
        currentWeekIndex++;
        weeks[currentWeekIndex] = [];
      }
    }

    return weeks;
  }

  weeks: { day: number, eventTitle?: string }[][] = this.getCalendar();

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.weeks = this.getCalendar();
  }

  previousMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.weeks = this.getCalendar();
  }

  getAllEventos() {
    this.calendar.getAllEventos().subscribe({
      next: response => {
        this.eventos = response.map((evento: any) => ({
          Day: new Date(evento.fecha).getDate(),
          Month: new Date(evento.fecha).getMonth(),
          Year: new Date(evento.fecha).getFullYear(),
          Title: evento.titulo
        }));
        this.weeks = this.getCalendar();
      },
      error: error => {
        console.log(`Error al obtener los eventos: ${error}`);
      }
    });
  }

  getEventTitleForDay(day: number): string {
    const event = this.eventos.find(evento => {
      return evento.Day === day && evento.Month === this.currentMonth && evento.Year === this.currentYear;
    });
  
    return event ? event.Title : '';
  }
}
