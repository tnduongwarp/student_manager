import { Component } from '@angular/core';
import * as QRCode from 'qrcodejs'

@Component({
  selector: 'app-qrcodegennerator',
  templateUrl: './qrcodegennerator.component.html',
  styleUrls: ['./qrcodegennerator.component.css']
})
export class QrcodegenneratorComponent {
  generateQR() {
    var amount = document.getElementById("amount").value;
    var name = document.getElementById("name").value;
    var account = document.getElementById("account").value;

    var qr = new QRCode(document.getElementById("qrcode"), {
      text: "BANK:" + name + ";ACC:" + account + ";AMOUNT:" + amount,
      width: 256,
      height: 256,
      colorDark : "#000000",
      colorLight : "#ffffff",
      correctLevel : QRCode.CorrectLevel.H
    });
  }
}
