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

  presentConfirm(title: string, message: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const confirm = this.alertCtrl.create({
        title,
        message,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              confirm.dismiss().then(res => resolve(false));
              return false;
            }
          },
          {
            text: 'Confirma',
            handler: () => {
              confirm.dismiss().then(() => resolve(true));
              return false;
            }
          }
        ]
      });
      return confirm.present();
    });
  }
}