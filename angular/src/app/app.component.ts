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
  constructor(
    private accservice: AccountService,
    private route : Router,
    private storageService: StorageService
     ){

  }
  isCollapsed = false;
  buttonClicked(){

    this.accservice.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        this.route.navigateByUrl('login')
      },
      error: err => {
        console.log(err);
      }
    });
  };

}

