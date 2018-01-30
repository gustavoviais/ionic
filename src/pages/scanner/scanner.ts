import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from "ionic-angular";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ScannerServiceProvider } from '../../providers/scanner-service/scanner-service';

@IonicPage()
@Component({
  selector: 'page-scanner', //apelido
  templateUrl: 'scanner.html'
})
export class ScannerPage {

  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner,
    private scannerServiceProvider: ScannerServiceProvider
  ) { }

  callScanner() {
    //this.scannerServiceProvider.postData("1", "010").subscribe(res => console.log(res));
    this.barcodeScanner.scan({
      preferFrontCamera: true, // iOS and Android
      showFlipCameraButton: true, // iOS and Android
      showTorchButton: true, // iOS and Android
      torchOn: true, // Android, launch with the torch switched on (if available)
      prompt: "Place a barcode inside the scan area", // Android
      resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
      orientation: "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
      disableAnimations: true, // iOS
      disableSuccessBeep: false // iOS and Android
    }).then((barcodeData) => {
      this.scannerServiceProvider.postData("111", "010").subscribe(res => alert(`SUCESSO: ${JSON.stringify(res)}`));      
    }, (err) => {
      //this.scannerServiceProvider.postData("1", "Erro_2").subscribe(res => alert(res));
      alert(`ERRO: ${JSON.stringify(err)}`);
    });
  }
}








/*
preferFrontCamera : true, // iOS and Android
showFlipCameraButton : true, // iOS and Android
showTorchButton : true, // iOS and Android
torchOn: true, // Android, launch with the torch switched on (if available)
saveHistory: true, // Android, save scan history (default false)
prompt : "Place a barcode inside the scan area", // Android
resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
disableAnimations : true, // iOS
disableSuccessBeep: false // iOS and Android*/
