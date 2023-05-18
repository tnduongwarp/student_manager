import { Component } from '@angular/core';
import { Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../service/students.service';
import { ScoreService } from '../../service/score.service';

@Component({
  selector: 'app-addpoint',
  templateUrl: './addpoint.component.html',
  styleUrls: ['./addpoint.component.css']
})
export class AddpointComponent implements Validators{
  student: any
  id: any;
  form : any ={
    semester: null,
    courses:null,
    gpa: null
  }

  constructor(
    private route: Router,
    private studentService: StudentsService,
    private url: ActivatedRoute,
    private scoreService: ScoreService
  ){}
  ngOnInit(): void{
    this.id= this.url.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe({
      next : (data: any) => {
        this.student=data.student;

      },
      error : err =>{
        console.log(err);

      }
    })
  }
  onSubmit(){
    const data= {
      data: {
      MSSV: this.student.mssv,
      semester: this.form.semester,
      gpa: this.form.gpa,
      courses: this.form.courses
      },
      message: 'nhập'
  }
    console.log(data)

    this.scoreService.add(data).subscribe({
      next: data =>{
        window.alert('Nhập thành công');
        //this.route.navigateByUrl('score/list');
      },
      error: err =>{
        window.alert(err.message);
      }
    });
  }

}
