import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class GerenteDatosService {

  private http:HttpClient;

  private url:string="http://dummy.restapiexample.com/api/v1/employee";

  constructor(http:HttpClient) {
    this.http = http;

  }

  //employees$:Observable<Employee[]> = null as any;

  getListadoCompleto (){
    //let list:Employee[] = [];
    
    //this.http.get<Employee[]>(`${this.url}s`).map( data => _.values(data) ).do(console.log);
    //this.http.get<Employee[]>(`${this.url}s`).subscribe(  value => {this.employees$ }  );
   //this.http.get<Employee[]>(`${this.url}s`).subscribe(  value => {this.employees$ }  );

    return this.http.get<Employee[]>(`${this.url}s`);
  }
  
  getEmployee (id:number) {
    let strID:string = id.toString();
    const path = `${this.url}/${strID}`;
    return this.http.get<Employee>(path);
  }

  /*
  crearTarea(t:Employee){
    return this.http.post(`${this.url}/todos`, t);
  }

  eliminarTarea(id:String){
    return this.http.delete<Employee>(`${this.url}/todos/${id}`);
  }

  modificarTarea(t:Employee){
    return this.http.put<Employee>(`${this.url}/todos/${t.id}`, t);
  }
*/
}
