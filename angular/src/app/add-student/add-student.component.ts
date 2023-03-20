import { Component , OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  newStudent: any
  constructor(private fb: FormBuilder,
    private routes: Router,
    private studentService: StudentsService){
      this.newStudent=fb.group(
        {
          mssv:['',Validators.required],
          name:['',Validators.required],
          class:['',Validators.required],
          email:['',Validators.required],
        }
      )
    }
  ngOnInit(): void{

  }
  onSubmit(){
    console.log(this.newStudent.value);
    this.studentService.addStudent(this.newStudent.value).subscribe((data: any)=>{
      console.log(data);
      this.routes.navigate(['']);
    })
  }
}
