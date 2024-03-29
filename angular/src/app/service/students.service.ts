import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  url :any

    constructor(private http: HttpClient) { this.url='http://localhost:3000/student/' }


  addStudent(student: any) : Observable<any> {
    return this.http.post(this.url+'add',student);
  }
  listStudent(): Observable<any> {
    return this.http.get(this.url+'all');
  }
  deleteStudent(id:any): Observable<any> {
    return this.http.delete(this.url+id);
  }
  getStudentById(id:any): Observable<any> {
    return this.http.get(this.url+id);
  }
  updateStudent(id :any,student:any): Observable<any> {
    return this.http.post(this.url+'update/'+id,student);
  }

}
