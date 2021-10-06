import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000";
  readonly PhotoUrl = "http://127.0.0.1:8000/media/";

  constructor(private http:HttpClient) { }

  //GET - Para consumir los datos del API Department
  getDepList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/department/');
  }

  //POST - Agregar
  addDepartment(val:any){
    return this.http.post(this.APIUrl + '/department/', val);
  }

  //PUT - Actualizar
  updateDepartment(val:any){
    return this.http.put(this.APIUrl + '/department/', val);
  }

  //Delete
  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl + '/department/', val);
  }
}
