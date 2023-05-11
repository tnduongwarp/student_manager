import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { MissService } from '../service/miss.service';

@Component({
  selector: 'app-addmiss',
  templateUrl: './addmiss.component.html',
  styleUrls: ['./addmiss.component.css']
})
export class AddmissComponent {

  file !: File;
  form : any= {
    name: null,
    sbd: null,
    avatarId:''
  }
  constructor(private http: HttpClient, private missService: MissService){}
  onFileSelected(event :any) {

    this.file = event.target.files[0];



}
  upload(){
    if (this.file) {

      const formData = new FormData();

      formData.append("avatar", this.file);


        this.http.post("http://localhost:3000/upload", formData)
        .subscribe(
          (data: any)=>{
            this.form.avatarId=data.id;
            this.missService.addMiss(this.form).subscribe();
            console.log(data)
          }
        );
    }

  }
}
