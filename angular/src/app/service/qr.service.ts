import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrService {
  url: any
  constructor(private http: HttpClient) { this.url ="http://localhost:3000/"}
  getQRCode(data: any){
    return this.http.post(this.url+'test',data);
  }
  getbank(){
    return this.http.get(this.url+'bankdata');
  }
}
