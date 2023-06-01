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
  url: any
  constructor(private http: HttpClient) {this.url='http://localhost:3000/user/' }

  login(data : any) : Observable<any> {
    console.log(data)
    return this.http.post('http://localhost:3000/login', data, httpOptions);
  };
  logout(): Observable<any> {

    return this.http.post('http://localhost:3000/logout', httpOptions);
  };
  getAll(){
    return this.http.get(this.url+ 'all');
  };
  insertOne(user: any){
    return this.http.post(this.url+'add',user)
  };
  updateById(id: any, user: any){
    return this.http.post(this.url + 'update/'+ id, user);
  };
  deleteById(id: any){
    return this.http.delete(this.url+'/delete/'+id);
  }
}
