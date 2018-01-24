import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { IonicPage } from "ionic-angular";

@IonicPage()
@Component({
  selector: 'page-profile', //apelido
  templateUrl: 'profile.html'
})
export class ProfilePage {

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    }

    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'Teste',
            subTitle: 'Botão de alerta',
            buttons: ['OK']
          });
          alert.present();
    }

}
