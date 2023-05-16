import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../service/students.service';
import { ScoreService } from '../service/score.service';


@Component({
  selector: 'app-input-score',
  templateUrl: './input-score.component.html',
  styleUrls: ['./input-score.component.css']
})
export class InputScoreComponent implements OnInit{
  students: any;
  diems: any[]=[];
  cpa =new Map<number,number>();
  isForbiden: boolean = false;
  searchText ='';
  constructor(
    private studentService: StudentsService,
    private scoreService: ScoreService
  ){}
  ngOnInit(): void {
    this.loadStudent();
    this.loadScore();
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
  loadScore(){
    this.scoreService.getAll().subscribe({
      next: data =>{
        this.isForbiden= false;
        this.diems= data.data
        console.log(this.students)
        for( let i=0; i< this.students.length;i++){
          let mssv = this.students[i].mssv;
          console.log('mssv', mssv)
          const cpa =this.countCpa(mssv)

          this.cpa.set(mssv,cpa);
          console.log('cpa', this.cpa.get(mssv))
        }


      },
      error: err =>{
        this.isForbiden=true
      }
    })
  }
   countCpa(MSSV: number){
    let data : any[]= [];
    for(let i=0; i<this.diems.length;i++){
      if(this.diems[i].MSSV==MSSV) data.push(this.diems[i]);
    }

    let sumScore=0;
    let sumCourse: number=0;
    for(let i =0; i< data.length;i++){
      sumScore = sumScore+ data[i].gpa*data[i].courses;
      const tmp: number=data[i].courses
      sumCourse = sumCourse + tmp *1 ;
    }

    return sumScore/sumCourse;
  }
}
