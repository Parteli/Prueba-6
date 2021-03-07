import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { ConsultaComponentComponent } from './consulta-component/consulta-component.component';
import { ListadoComponentComponent } from './listado-component/listado-component.component';
import { ToledoComponentComponent } from './toledo-component/toledo-component.component';
import { MadridComponentComponent } from './madrid-component/madrid-component.component';
import { ValidaConsultaDirective } from './validators/valida-consulta.directive';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponentComponent,
    ListadoComponentComponent,
    ToledoComponentComponent,
    MadridComponentComponent,
    ValidaConsultaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
