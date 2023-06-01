import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Dimensions, ImageCroppedEvent, ImageTransform, base64ToFile } from 'ngx-image-cropper';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent {
  file : any
  form: any = {
    name : null,
    email : null,
    password : null,
    imageId : null,
    role: null,
    mssv: null,
    status: 'Active'
  }
  imageChangedEvent: any = '';
  croppedImage: any = '';
  canvasRotation = 0;
  rotation = 0;
  scale = 1;
  showCropper = false;
  containWithinAspectRatio = false;
  transform: ImageTransform = {};

  constructor(private http: HttpClient, private accountService: AccountService){}

  onSubmit(){
    if(this.file){
      console.log(this.form)
      const formData = new FormData();
      formData.append('avatar', this.file);
      console.log(formData)
      this.http.post("http://localhost:3000/upload", formData)
      .subscribe(
        (data: any)=>{
          console.log(data)
          this.form.imageId=data.name;
          console.log(this.form)
          this.accountService.insertOne(this.form).subscribe((data: any)=>{
            window.alert('Thêm thành công')
          });
        }
      );
    }
  }
  fileChangeEvent(event: any): void {
    console.log(event.target.files[0])
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
     this.file = (base64ToFile(event.base64 ||''));



  }

  imageLoaded() {
    this.showCropper = true;
    console.log('Image loaded');
  }

  cropperReady(sourceImageDimensions: Dimensions) {
    console.log('Cropper ready', sourceImageDimensions);
  }

  loadImageFailed() {
    console.log('Load failed');
  }

  resetImage() {
    this.scale = 1;
    this.rotation = 0;
    this.canvasRotation = 0;
    this.transform = {};
  }

  zoomOut() {
    this.scale -= 0.1;
    this.transform = {
      ...this.transform,
      scale: this.scale,
    };
  }

  zoomIn() {
    this.scale += 0.1;
    this.transform = {
      ...this.transform,
      scale: this.scale,
    };
  }
  showPassword(){
    var x = document.getElementById("password") as HTMLInputElement;
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
}
