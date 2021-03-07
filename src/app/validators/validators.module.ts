import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidaConsultaDirective } from './valida-consulta.directive';



@NgModule({
  declarations: [ValidaConsultaDirective],
  imports: [
    CommonModule
  ]
})
export class ValidatorsModule { }
