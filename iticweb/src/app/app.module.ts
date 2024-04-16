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
import { GestioDadesComponent } from './componentes/main/proyecte-educatiu/gestio-dades/gestio-dades.component';
import { CiclesFormatiusComponent } from './componentes/main/estudis/cicles-formatius/cicles-formatius.component';
import { CiclesFormatiusGrauMitjaComponent } from './componentes/main/estudis/cicles-formatius-grau-mitja/cicles-formatius-grau-mitja.component';
import { CiclesFormatiusGrauSuperiorComponent } from './componentes/main/estudis/cicles-formatius-grau-superior/cicles-formatius-grau-superior.component';
import { ErasmusPolicyComponent } from './componentes/main/ServeiErasmus/erasmus-policy/erasmus-policy.component';
import { MobilitatAlumnatComponent } from './componentes/main/ServeiErasmus/mobilitat-alumnat/mobilitat-alumnat.component';
import { MobilitatProfessoratComponent } from './componentes/main/ServeiErasmus/mobilitat-professorat/mobilitat-professorat.component';
import { IticBcnErasmusDataSheetComponent } from './componentes/main/ServeiErasmus/itic-bcn-erasmus-data-sheet/itic-bcn-erasmus-data-sheet.component';
import { ServeisComponent } from './componentes/main/serveis/serveis.component';
import { SecretariaComponent } from './componentes/main/secretaria/secretaria.component';
import { ChatboxComponent } from './componentes/main/chatbox/chatbox.component';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/main/login/login.component';
import { RegisterComponent } from './componentes/main/register/register.component'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NoticiaDetalleComponent } from './componentes/noticias/noticia-detalle/noticia-detalle.component';
import { MiniNoticiaComponent } from './componentes/noticias/mini-noticia/mini-noticia.component';
import { FormNoticiaComponent } from './componentes/main/form-noticia/form-noticia.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCalendariComponent } from './componentes/main/institut/institut-children/calendari-del-curs/form-calendari/form-calendari.component';
import { GestorNoticiasComponent } from './componentes/noticias/gestor-noticias/gestor-noticias.component';

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
    GestioDadesComponent,
    CiclesFormatiusComponent,
    CiclesFormatiusGrauMitjaComponent,
    CiclesFormatiusGrauSuperiorComponent,
    ErasmusPolicyComponent,
    MobilitatAlumnatComponent,
    MobilitatProfessoratComponent,
    IticBcnErasmusDataSheetComponent,
    ServeisComponent,
    SecretariaComponent,
    ChatboxComponent,
    NoticiasComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NoticiaDetalleComponent,
    MiniNoticiaComponent,
    FormNoticiaComponent,
    FormCalendariComponent,
    GestorNoticiasComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
