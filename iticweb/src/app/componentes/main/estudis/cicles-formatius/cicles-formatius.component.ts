import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cicles-formatius',
  templateUrl: './cicles-formatius.component.html',
  styleUrls: ['./cicles-formatius.component.css']
})
export class CiclesFormatiusComponent implements OnInit {
  showingDescription: string = 'smx';
  hoveredItem: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }
  

  showDescription(ciclo: string) {
    this.showingDescription = ciclo;
    this.hoveredItem = ciclo;
  }

  hideDescription() {
    this.showingDescription = '';
    this.hoveredItem = '';
  }

}
