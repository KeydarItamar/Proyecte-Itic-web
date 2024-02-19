import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutComponent } from './componentes/main/institut/institut.component';
import { ProyecteEducatiuComponent } from './componentes/main/proyecte-educatiu/proyecte-educatiu.component';
import { HistoriaComponent } from            './componentes/main/institut/institut-children/historia/historia.component';
import { OrganigramaComponent } from         './componentes/main/institut/institut-children/organigrama/organigrama.component';
import { CalendariDelCursComponent } from    './componentes/main/institut/institut-children/calendari-del-curs/calendari-del-curs.component';
import { PerfilDelcontractanComponent } from './componentes/main/institut/institut-children/perfil-delcontractan/perfil-delcontractan.component';
const routes: Routes = [
  { path: 'Institut', children: [
    { path: 'Història', component: HistoriaComponent }, 
    { path: 'Organigrama', component: OrganigramaComponent }, 
    { path: 'Calendari-del-curs', component: CalendariDelCursComponent }, 
    { path: 'Perfil-del-contractan', component: PerfilDelcontractanComponent } 
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
export class AppRoutingModule { }
