import { Component } from '@angular/core';
//import { FormBuilder } from '@angular/forms';
//import { Validators } from '@angular/forms';
import { Employee } from '../interfaces/employee';
import { GerenteDatosService } from '../services/gerente-datos.service';

@Component({
  selector: 'app-consulta-component',
  templateUrl: './consulta-component.component.html',
  styleUrls: ['./consulta-component.component.css']
})
export class ConsultaComponentComponent{


  empleado:Employee;
  ipc:number = 0;
  resultSalary:number = 0;
  success:boolean = false;

  constructor(private gds:GerenteDatosService)
  {
    this.empleado = {id:null as any, employee_name:"", employee_salary:-1, employee_age:-1, profile_image:""};
  }

  consultar(){
    
    this.gds.getEmployee(this.empleado.id).subscribe( 
      (data:Employee) =>
      {
        this.empleado = data as Employee;
        console.log(data);
        console.log(this.empleado);
      },
      (err:any) => {console.log ("consulta ERROR")} ,
      () => { this.success = true; }
    )
    ;
  }

  limpiar(){
    this.empleado = {id:null as any, employee_name:"", employee_salary:-1, employee_age:-1, profile_image:""};
    this.success = false;
  }

  calcularIPC()
  {
    this.resultSalary = this.empleado.employee_salary * (this.ipc*0.01 + 1);


  }
  /*

  constructor(private gds:GerenteDatosService, private modelo: FormBuilder)
  {
  }


  formStructure = this.modelo.group({
    ipc:[''],
    idValue:[this.empleado.id,Validators.required ]
  });

  consultar(){
    console.log("done");
    //this.gds.getEmployee(this.formStructure.value.id).subscribe(value=>{this.empleado=value});
 
  }

  
  this.ts.getListadoCompleto().subscribe(
    emp=>{
      this.empleado=emp
      calculo = ipc*(this.empleado[i].data.employee_salary);
    }

  );
  
  
  
  
  */


}
