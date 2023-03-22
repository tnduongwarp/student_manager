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
          mssv:['',[Validators.required,Validators.maxLength(8),Validators.minLength(8)]],
          name:['',Validators.required],
          class:['',Validators.required],
          email:['',[Validators.required, Validators.email]]
        }
      )
    }
   // Validators.maxLength(8),
  ngOnInit(): void{

  }
  onSubmit(){

    this.studentService.addStudent(this.newStudent.value).subscribe((data: any)=>{

      this.routes.navigate(['student/list']);
    })
  }
  get mssv(){
    return this.newStudent.get('mssv')
  }
  get email(){
    return this.newStudent.get('email')
  }
  get class(){
    return this.newStudent.get('class')
  }
  get name(){
    return this.newStudent.get('name');
  }
}
