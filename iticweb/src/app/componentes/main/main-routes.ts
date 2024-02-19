import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutComponent } from            './institut/institut.component';
import { ProyecteEducatiuComponent } from    './proyecte-educatiu/proyecte-educatiu.component';
import { HistoriaComponent } from            './institut/institut-children/historia/historia.component';
import { OrganigramaComponent } from         './institut/institut-children/organigrama/organigrama.component';
import { CalendariDelCursComponent } from    './institut/institut-children/calendari-del-curs/calendari-del-curs.component';
import { PerfilDelcontractanComponent } from './institut/institut-children/perfil-delcontractan/perfil-delcontractan.component';
import { OnSomComponent } from './institut/institut-children/on-som/on-som.component';
const routes: Routes = [
  { path: 'Institut', children: [
    { path: 'On som', component: OnSomComponent},
    { path: 'Història', component: HistoriaComponent }, 
    { path: 'Organigrama', component: OrganigramaComponent }, 
    { path: 'Calendari del curs', component: CalendariDelCursComponent }, 
    { path: 'Perfil del contractan', component: PerfilDelcontractanComponent } 
  ]},
  // {path: 'Proyecte Educatiu', children:[
  //  {path: 'Gestió de dades de caràcter personal', component: GestiódedadesdecaràcterpersonalComponent} 
  // ]},
  // {path: 'Estudis', children: [
  //     { path: 'Cicles-Formatius', component: CiclesFormatiusComponent },
  //     { path: 'Cicles-Formatius-Grau-Mitja', component: CiclesFormatiusGrauMitjaComponent },
  //     { path: 'Cicles-Formatius-Grau-Superior', component: CiclesFormatiusGrauSuperiorComponent },
  //     // Agrega las rutas para los demás subtitulos aquí
  //   ]},
  //   {
  //     path: 'ServeisErasmus',
  //     children: [
  //       { path: 'Erasmus-Policy-Statement', component: ErasmusPolicyStatementComponent },
  //       { path: 'Mobilitat-d-alumnat', component: MobilitatAlumnatComponent },
  //       { path: 'Mobilitat-de-professorat', component: MobilitatProfessoratComponent },
  //       { path: 'ITICBCN-Erasmus-data-sheet', component: ITICBCNErasmusDataSheetComponent },
  //     ]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }