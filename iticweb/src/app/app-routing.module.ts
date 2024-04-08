import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoticiaDetalleComponent } from './componentes/noticias/noticia-detalle/noticia-detalle.component';
const routes: Routes = [
  { path: 'noticiaDetalle/:id', component: NoticiaDetalleComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
