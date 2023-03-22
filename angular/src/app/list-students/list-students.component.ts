import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit{
  students: any;
  token: any
  constructor( private routes: Router,
    private studentService: StudentsService){

    }
  ngOnInit(): void {
    this.loadStudent();
  }
  loadStudent(){
    this.studentService.listStudent().subscribe((data:any)=>{

      this.students=data.SinhVien;
    })
  }
  deleteStudent(data: any){
    this.studentService.deleteStudent(data._id).subscribe((data:any)=>{
      this.loadStudent()
    })

  }

}
