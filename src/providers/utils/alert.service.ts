import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {
    constructor(private alertCtrl: AlertController) {

    }

    presentAlert(title, subTitle) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['Ok']
        });
        alert.present();
    }

    presentConfirm(title, msg) {
        let alert = this.alertCtrl.create({
          title: title,
          message: msg,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Confirm',
              handler: () => {
                console.log('Confirm clicked');
              }
            }
          ]
        });
        alert.present();
      }
}



