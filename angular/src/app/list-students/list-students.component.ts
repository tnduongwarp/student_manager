import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../service/students.service';
import { StorageService } from '../service/storage.service';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit{
  students: any;
  isForbiden: boolean = false;
  constructor(
    private route : Router,
    private studentService: StudentsService){

    }
  ngOnInit(): void {
    this.loadStudent();

  }

  loadStudent(){
    this.studentService.listStudent().subscribe({
      next: (data:any)=>{
        this.isForbiden=false;
        this.students=data.SinhVien;
      },
      error: err =>{
        this.isForbiden=true
      }
    })
  }
  deleteStudent(data: any){
    this.studentService.deleteStudent(data._id).subscribe((data:any)=>{
      this.loadStudent()
    })

  }
  updateStudent(id: any){
    console.log(id)
    this.route.navigateByUrl('student/update/'+id)
  }

}
