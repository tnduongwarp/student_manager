import { Component } from '@angular/core';
import { PostService } from '../../service/post.service';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-listpost',
  templateUrl: './listpost.component.html',
  styleUrls: ['./listpost.component.css']
})
export class ListpostComponent {
  posts: any;

  constructor(private postService:PostService){}
  ngOnInit(){
    this.postService.getAll().subscribe(
      (data: any)=>{


        this.posts= data.data;

      }
    )
  }
}
