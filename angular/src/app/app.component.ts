import { Component } from '@angular/core';
import { AccountService } from './service/account.service';
import { Router } from '@angular/router';
import { StorageService } from './service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any;
  isLogin= false
  constructor(
    private accservice: AccountService,
    private route : Router,
    private storageService: StorageService,
     ){
  }
  ngOnInit(): void {

    this.user= this.storageService.getUser();
    if(this.storageService.isLoggedIn()) this.isLogin=true;
    else{
      this.route.navigateByUrl('login');
    }

  }
  isCollapsed = false;
  buttonClicked(){

    this.accservice.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload()

      },
      error: err => {
        console.log(err);
      }
    });
  };
}

