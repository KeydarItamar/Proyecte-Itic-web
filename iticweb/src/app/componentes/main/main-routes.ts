import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutComponent } from            './institut/institut.component';
import { ProyecteEducatiuComponent } from    './proyecte-educatiu/proyecte-educatiu.component';
import { HistoriaComponent } from            './institut/institut-children/historia/historia.component';
import { OrganigramaComponent } from         './institut/institut-children/organigrama/organigrama.component';
import { CalendariDelCursComponent } from    './institut/institut-children/calendari-del-curs/calendari-del-curs.component';
import { PerfilDelcontractanComponent } from './institut/institut-children/perfil-delcontractan/perfil-delcontractan.component';
import { OnSomComponent } from './institut/institut-children/on-som/on-som.component';
import { GestioDadesComponent } from './proyecte-educatiu/gestio-dades/gestio-dades.component';
import { CiclesFormatiusComponent } from './estudis/cicles-formatius/cicles-formatius.component';
import { CiclesFormatiusGrauMitjaComponent } from './estudis/cicles-formatius-grau-mitja/cicles-formatius-grau-mitja.component';
import { CiclesFormatiusGrauSuperiorComponent } from './estudis/cicles-formatius-grau-superior/cicles-formatius-grau-superior.component';
import { ErasmusPolicyComponent } from './ServeiErasmus/erasmus-policy/erasmus-policy.component';
import { MobilitatAlumnatComponent } from './ServeiErasmus/mobilitat-alumnat/mobilitat-alumnat.component';
import { MobilitatProfessoratComponent } from './ServeiErasmus/mobilitat-professorat/mobilitat-professorat.component';
import { IticBcnErasmusDataSheetComponent } from './ServeiErasmus/itic-bcn-erasmus-data-sheet/itic-bcn-erasmus-data-sheet.component';
import { ServeisComponent } from './serveis/serveis.component';
import { SecretariaComponent } from './secretaria/secretaria.component';
import { ChatboxComponent } from './chatbox/chatbox.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: ChatboxComponent},
    { path: 'Institut', children: [
    { path: 'On som', component: OnSomComponent},
    { path: 'Història', component: HistoriaComponent }, 
    { path: 'Organigrama', component: OrganigramaComponent }, 
    { path: 'Calendari del curs', component: CalendariDelCursComponent }, 
    { path: 'Perfil del contractan', component: PerfilDelcontractanComponent } 
  ]},
    {path: 'Projecte educatiu', children:[
    {path: 'Gestió de dades de caràcter personal', component: GestioDadesComponent} 
    ]},
  {path: 'Estudis', children: [
      { path: 'Cicles Formatius (CF)', component: CiclesFormatiusComponent },
      { path: 'Cicles Formatius de Grau Mitjà (CFGM)', component: CiclesFormatiusGrauMitjaComponent },
      { path: 'Cicles Formatius de Grau Superior (CFGS)', component: CiclesFormatiusGrauSuperiorComponent },
    ]},
    {
      path: 'ServeisErasmus+',
      children: [
        { path: 'Erasmus Policy Statement', component: ErasmusPolicyComponent },
        { path: 'Mobilitat d’alumnat', component: MobilitatAlumnatComponent },
        { path: 'Mobilitat de professorat', component: MobilitatProfessoratComponent },
        { path: 'ITICBCN Erasmus data sheet', component: IticBcnErasmusDataSheetComponent },
      ]},
        { path: 'Serveis', component: ServeisComponent },
        { path: 'Secretaria', component: SecretariaComponent },
        { path: '**', redirectTo: '/error', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }