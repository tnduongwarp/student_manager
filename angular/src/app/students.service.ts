import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {


    constructor(private http: HttpClient) { }


  addStudent(student: any){
    return this.http.post('http://localhost:3000/student/add',student);
  }
  listStudent(){
    return this.http.get('http://localhost:3000/student/all');
  }
  deleteStudent(id:any){
    return this.http.delete('http://localhost:3000/student/'+id);
  }
  getStudentById(id:any){
    return this.http.get('http://localhost:3000/student/'+id);
  }
  updateStudent(id :any,student:any){
    return this.http.post('http://localhost:3000/student/update/'+id,student);
  }

}
