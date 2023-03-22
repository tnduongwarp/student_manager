
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;


  constructor(
      private formBuilder: FormBuilder,
      private routes: Router,
      private accountService: AccountService
  ) { this.form = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
});}

  ngOnInit() {

  }

  // convenience getter for easy access to form fields
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  onSubmit() {

      this.accountService.login(this.form.value).subscribe((data: any)=>{
        console.log(data)
        if(data.token) this.routes.navigate(['student/list']);
      })

  }
}
