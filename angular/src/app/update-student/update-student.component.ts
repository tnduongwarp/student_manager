import { Component } from '@angular/core';
import { FormBuilder, Validators , ReactiveFormsModule} from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';
import { StudentsService } from '../service/students.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements Validators{
  updatedStudent: any;
  id: any;
  constructor(private formbuilder: FormBuilder,
    private routes: Router,
    private studentService: StudentsService,
    private url: ActivatedRoute){
      this.updatedStudent=formbuilder.group(
        {
          mssv:['',Validators.required],
          name:['',Validators.required],
          class:['',Validators.required],
          email:['',Validators.required],
          status:['', Validators.required]
        }
      )
    }
  ngOnInit(): void{
    this.id= this.url.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe((data:any) =>{
       this.updatedStudent.patchValue(data.student);

    })
  }
  onSubmit(){
    console.log(this.updatedStudent.value);
    this.studentService.updateStudent(this.id,this.updatedStudent.value).subscribe((data: any)=>{

      this.routes.navigate(['student/list']);
    })
  }
}
