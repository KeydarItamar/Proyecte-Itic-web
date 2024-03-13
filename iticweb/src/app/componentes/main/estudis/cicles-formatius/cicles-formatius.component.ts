import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cicles-formatius',
  templateUrl: './cicles-formatius.component.html',
  styleUrls: ['./cicles-formatius.component.css']
})
export class CiclesFormatiusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showingDescription: string = '';

  showDescription(ciclo: string) {
    this.showingDescription = ciclo;
  }

  hideDescription() {
    this.showingDescription = '';
  }
}
