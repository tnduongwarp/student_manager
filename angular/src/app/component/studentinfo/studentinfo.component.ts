import { Component } from '@angular/core';
import { ScoreService } from 'src/app/service/score.service';
import { StorageService } from 'src/app/service/storage.service';
import { StudentsService } from 'src/app/service/students.service';

@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css']
})
export class StudentinfoComponent {
  studentInfo : any;
  pointsInfo : any;
  constructor(private storageService : StorageService,
              private scoreService: ScoreService,
              private studentService: StudentsService
              ){}
  ngOnInit(){
    let user = this.storageService.getUser();
    if(user){
      this.studentService.getStudentById(user._id).subscribe((data: any) =>{
        this.studentInfo=data.student
      })
      this.scoreService.getByMSSV(this.studentInfo.mssv).subscribe( (data: any) =>{
        this.pointsInfo=data;
      })
    }

  }
}
