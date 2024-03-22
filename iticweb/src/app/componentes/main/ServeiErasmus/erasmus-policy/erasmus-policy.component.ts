import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erasmus-policy',
  templateUrl: './erasmus-policy.component.html',
  styleUrls: ['./erasmus-policy.component.css']
})
export class ErasmusPolicyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  descargarDocumento() {
    // Simplemente redirecciona a la URL del documento
    window.location.href = "../../../../../assets/erasmus/ITICBCN-Erasmus-data-sheet.pdf";
  }
}
