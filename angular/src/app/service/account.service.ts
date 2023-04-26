import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  login(data : any) : Observable<any> {
    console.log(data)
    return this.http.post('http://localhost:3000/login', data, httpOptions);
  }
  logout(): Observable<any> {
    return this.http.post('http://localhost:3000/signout', { }, httpOptions);
  }
}
