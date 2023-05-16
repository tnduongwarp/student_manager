import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  post : any
  constructor(private url: ActivatedRoute, private postService: PostService){}
  ngOnInit(){
    let id = this.url.snapshot.params['id'];
    this.postService.getById(id)
    .subscribe(
      (data: any) => {
        this.post = data.data;
      }
    )
  }
}
