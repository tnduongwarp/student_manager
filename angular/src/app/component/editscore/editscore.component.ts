import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from 'src/app/service/score.service';

@Component({
  selector: 'app-editscore',
  templateUrl: './editscore.component.html',
  styleUrls: ['./editscore.component.css']
})
export class EditscoreComponent {
  scoredata: any;
  isEditting = false;
  searchText: any;
  editData: any ={
    courses: null,
    gpa: null,
    id: null
  }
  constructor(private scoreService: ScoreService, private route: Router){}
  ngOnInit(){
    this.scoreService.getAll().subscribe((data: any)=>{
      this.scoredata = data.data;
      console.log(this.scoredata)
    })
  }
  onClick(id : any){
    var editForm = document.getElementById(id);
    if (editForm!.style.display === "none") {
				editForm!.style.display = "block";
        this.isEditting = true;

			} else {
				editForm!.style.display = "none";
        this.isEditting = false;
			}
      this.editData.id = id;
  }
  submitEdit(id: any){
    const data = {
      courses: this.editData.courses,
      gpa: this.editData.gpa
    }
    console.log(data)
    this.scoreService.updateById(id,data).subscribe((data: any) => {
      window.location.reload()
    })
  }

  exitEdit(id: any){
    var editForm = document.getElementById(id);
    editForm!.style.display = "none";
    this.isEditting = false;
  }
}
