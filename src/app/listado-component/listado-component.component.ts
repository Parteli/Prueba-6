import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';
import { GerenteDatosService } from '../services/gerente-datos.service';

@Component({
  selector: 'app-listado-component',
  templateUrl: './listado-component.component.html',
  styleUrls: ['./listado-component.component.css']
})
export class ListadoComponentComponent {

  listado:Employee[];
  check:boolean = false;

  constructor(private gds:GerenteDatosService) 
  {
    this.listado = null as any;

  }

  getListadoCompleto()
  {
    this.gds.getListadoCompleto().subscribe
    ( (data:Employee[]) =>
      {
        this.listado = data;
        console.log(data);
        console.log(this.listado);
      },
      (err:any) => { console.log("Error get List"); },
      () => { console.log ("Get list completed") }
    );
  }

  showListado()
  {
    this.getListadoCompleto();
    this.check = true;
  }
  hideListado()
  {
    this.check = false;
    this.listado = null as any;
  }
}
