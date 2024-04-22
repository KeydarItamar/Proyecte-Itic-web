import {Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var tinymce: any;

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.css']
})
export class SecretariaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  editarContent(entryContent: HTMLElement) {
    const editorContent = tinymce.get('editor').getContent();

    entryContent.innerHTML = editorContent;
  }
}
