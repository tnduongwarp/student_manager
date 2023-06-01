import { Component } from '@angular/core';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  users: any;
  constructor(private accSer : AccountService){}
  ngOnInit(){
    this.accSer.getAll().subscribe(
      (data : any) => {
        this.users = data.data;
      }
    )
  }
  lockAccount(id:any, account:any)
  {
    const edited = {
      imageId : account.imageId,
      name : account.name,
      status : 'Locked',
      role : account.role
    }
    this.accSer.updateById(id,edited).subscribe((data : any) => {
      window.location.reload();
    })
  }
  unlockAccount(id:any, account:any)
  {
    const edited = {
      imageId : account.imageId,
      name : account.name,
      status : 'Active',
      role : account.role
    }
    this.accSer.updateById(id, edited).subscribe((data : any) => {
      window.location.reload();
    })
  }
  deleteAccount(id: any){
    this.accSer.deleteById(id).subscribe((data: any)=>{
      window.location.reload()
    })
  }
}
