import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { InstitutComponent } from  './componentes/main/institut/institut.component';
import { ProyecteEducatiuComponent } from './componentes/main/proyecte-educatiu/proyecte-educatiu.component';
import { HistoriaComponent } from './componentes/main/institut/institut-children/historia/historia.component';
import { OrganigramaComponent } from './componentes/main/institut/institut-children/organigrama/organigrama.component';
import { CalendariDelCursComponent } from './componentes/main/institut/institut-children/calendari-del-curs/calendari-del-curs.component';
import { PerfilDelcontractanComponent } from './componentes/main/institut/institut-children/perfil-delcontractan/perfil-delcontractan.component';
import { MainComponent } from './componentes/main/main.component';
import { MainRoutingModule } from './componentes/main/main-routes';
import { OnSomComponent } from './componentes/main/institut/institut-children/on-som/on-som.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InstitutComponent,
    ProyecteEducatiuComponent,
    HistoriaComponent,
    OrganigramaComponent,
    CalendariDelCursComponent,
    PerfilDelcontractanComponent,
    MainComponent,
    OnSomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
