import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms"

@Directive({
  selector: '[appValidaConsulta]',
  providers: [{provide: NG_VALIDATORS, useExisting:ValidaConsultaDirective,multi:true}]
})
export class ValidaConsultaDirective implements Validator {

  validate(control:AbstractControl): import("@angular/forms").ValidationErrors {
    
    const idValue = <string>control.value;

    if(!idValue) { return {'validaConsulta':{'message':'El ID es obligatorio'}} }
    
    return null as any;
  }

  constructor() { }

}
