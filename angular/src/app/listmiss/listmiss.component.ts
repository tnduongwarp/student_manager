import { Component, OnInit } from '@angular/core';
import { MissService } from '../service/miss.service';
import {  Router } from '@angular/router';
import crc16ccitt from 'crc/crc16ccitt'
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-listmiss',
  templateUrl: './listmiss.component.html',
  styleUrls: ['./listmiss.component.css']
})
// miss: {
  // avatar , sbd ,
// }
export class ListmissComponent implements OnInit{
  isQRReady = false;
  qrvalue : any;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  miss: any

  amount : any

  headtext = '00020101021238540010A00000072701240006970436011010351712690208QRIBFTTA5303704'
  amounttext='54'
  country = '5802VN';
  content = '62200816'
  transactionId =123456
  crctext='6304'
  constructor(private route: Router, private missService : MissService){}
  ngOnInit(){
    this.missService.getById('645cc1c4f1980ed941f876b0')
    .subscribe((data: any) =>{
      this.miss=data.data;
      console.log(this.miss)
    } )


  }
  vote(){
    let x= (this.amount*5000).toString();
    let amounttext1;
    if(x.length<10){
      amounttext1 = this.amounttext + '0'+x.length+x
    }
    else {
      amounttext1= this.amounttext+ x.length+x;
    }
    console.log(amounttext1);
    let content1
    content1= this.content + this.miss.sbd+ ' '+this.transactionId;
    console.log(content1);
    let crc = crc16ccitt(this.headtext+amounttext1+this.country+content1+this.crctext).toString(16)
    let crctext1= this.crctext + crc
    console.log(crctext1);
    this.qrvalue  = this.headtext+amounttext1+this.country+content1+crctext1;
    console.log(this.qrvalue)
    this.isQRReady=true;

  }
}
