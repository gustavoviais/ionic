import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { IonicPage } from "ionic-angular";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  goToProfile(){
    this.navCtrl.push("ProfilePage");
  }

  goToScanner(){
    this.navCtrl.push("ScannerPage");
  }

  goToReport(){
    this.navCtrl.push("ReportPage");
  }

}
