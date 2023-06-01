import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { StorageService } from '../../service/storage.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent {
  file!: File
  form : any ={
    content: null,
    tittle: null,
    date: null,
    imageId: null,
    author: null
  }
  html='';


  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text in this rich text editor....',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
   translate: 'no'
  };
  constructor(private http : HttpClient, private postService: PostService, private storageService: StorageService){}
  onFileSelected(event :any) {

    this.file = event.target.files[0];
}
  onSubmit(){
    if (this.file) {
      const today: Date = new Date();
      this.form.date = today;
      const formData = new FormData();
      formData.append("avatar", this.file);
      this.form.author = this.storageService.getUser().email

        this.http.post("http://localhost:3000/upload", formData)
        .subscribe(
          (data: any)=>{
            this.form.imageId=data.name;
            this.postService.addPost(this.form).subscribe((data: any)=>{
              window.alert('Thêm thành công')
            });
            console.log(data)
          }
        );
    }
  }
}
