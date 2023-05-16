import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  url :any

  constructor(private http: HttpClient) { this.url='http://localhost:3000/score/' }

  add(data: any) : Observable<any> {
    return this.http.post(this.url+'add',data);
  }
  getAll(): Observable<any> {
    return this.http.get(this.url+'all');
  }


}
