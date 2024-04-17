import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoticiaDetalleComponent } from './componentes/noticias/noticia-detalle/noticia-detalle.component';
import { FormNoticiaComponent } from './componentes/main/form-noticia/form-noticia.component';
const routes: Routes = [
  { path: 'noticiaDetalle/:id', component: NoticiaDetalleComponent},
  { path: 'insert_noticia/:id', component: FormNoticiaComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
