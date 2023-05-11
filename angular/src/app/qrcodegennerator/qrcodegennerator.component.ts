import { Component } from '@angular/core';
import { QrService } from '../service/qr.service';
//import * as VietQR from 'vietqr'
@Component({
  selector: 'app-qrcodegennerator',
  templateUrl: './qrcodegennerator.component.html',
  styleUrls: ['./qrcodegennerator.component.css']
})
export class QrcodegenneratorComponent {
  bankdatas: any;
  searchKey: any;
  constructor(private qrService: QrService){}
  ngOnInit(){
    this.qrService.getbank().subscribe(
      (data: any) =>{
        this.bankdatas=data
      }
    )
  }
  srcImage = '';
  qrIsReady = false;
  form : any ={
    bank: null,
    accountName: null,
    accountNumber: null,
    amount: '',
    memo: '',
    template: "qr_only"
  };
  onSubmit(){
    this.qrService.getQRCode(this.form).subscribe({
      next : (data: any) =>{
        this.srcImage= data.qrDataURL;
        this.qrIsReady= true;
       // window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    })
  }
  // get filterBanks(){
  //   return this.bankdatas.filter( (option: any) => {
  //     return option.name.toLowerCase().includes(this.searchKey.toLowerCase())
  //   })
  // }
}
