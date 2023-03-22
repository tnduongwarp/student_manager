import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  url :any

    constructor(private http: HttpClient) { this.url='http://localhost:3000/student/' }


  addStudent(student: any){
    return this.http.post(this.url+'add',student);
  }
  listStudent(){
    return this.http.get(this.url+'all');
  }
  deleteStudent(id:any){
    return this.http.delete(this.url+id);
  }
  getStudentById(id:any){
    return this.http.get(this.url+id);
  }
  updateStudent(id :any,student:any){
    return this.http.post(this.url+'update/'+id,student);
  }

}
