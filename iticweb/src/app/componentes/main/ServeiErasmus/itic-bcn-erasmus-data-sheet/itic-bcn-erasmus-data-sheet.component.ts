import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itic-bcn-erasmus-data-sheet',
  templateUrl: './itic-bcn-erasmus-data-sheet.component.html',
  styleUrls: ['./itic-bcn-erasmus-data-sheet.component.css']
})
export class IticBcnErasmusDataSheetComponent implements OnInit {
  urlDocumento: string = "../../../../../assets/erasmus/ITICBCN-Erasmus-data-sheet.pdf";

  constructor() { }

  ngOnInit(): void {
  }
  descargarDocumento() {
    // Simplemente redirecciona a la URL del documento
    window.location.href = "../../../../../assets/erasmus/ITICBCN-Erasmus-data-sheet.pdf";
  }
}
