import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url :any

  constructor(private http: HttpClient) { this.url='http://localhost:3000/post/' }

  addPost(post:any){
    return this.http.post(this.url+'add',post)
  }
  getAll(){
    return this.http.get(this.url+'all');
  }
  getById(id: any){
    return this.http.get(this.url+id);
  }
}
