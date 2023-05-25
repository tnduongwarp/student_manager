import { Component , Input} from '@angular/core';
import { PostService } from '../../service/post.service';
import { StorageService } from '../../service/storage.service';


@Component({
  selector: 'app-listpost',
  templateUrl: './listpost.component.html',
  styleUrls: ['./listpost.component.css']
})
export class ListpostComponent {
  @Input() isSystemAdmin !: boolean
  posts: any;

  constructor(private postService:PostService, private storageService : StorageService){}
  ngOnInit(){
    if(this.storageService.getUser().role == 'systemadmin') this.isSystemAdmin=true
    this.postService.getAll().subscribe(
      (data: any)=>{


        this.posts= data.data;

      }
    )
  }
  deletePost(postId: any, imageId: any){
    this.postService.deleteById(postId,imageId).subscribe((data: any) =>{
      if(data.message =='ok') window.alert('Xóa thành công !')
      else window.alert('Có lỗi khi xóa')
      window.location.reload()
    })
  }
}
