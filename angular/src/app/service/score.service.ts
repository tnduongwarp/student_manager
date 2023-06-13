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
  getByMSSV(mssv: any) : Observable<any>{
    return this.http.get(this.url+mssv)
  }
  getDataFOrChart(year: any, semester: any){
    const url = `${this.url}chart?year=${year}&semester=${semester}`;
    return this.http.get(url)
  }
  updateById(id: any, data: any){
    return this.http.post(this.url+id, data);
  }

}
