import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, LoadingController, Loading } from "ionic-angular";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { AlertService } from "../../providers/utils/alert.service";
import { loginPicture } from "../../providers/utils/constants";
import { Storage } from "@ionic/storage";
import { isUndefined } from "ionic-angular/util/util";
import { OnInit } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-login', //apelido
  templateUrl: 'login.html'
})
export class LoginPage {
    loading: Loading;
    credentials = { login: '', senha: '' };
    loginPicture: string;

    constructor(public navCtrl: NavController,
                private auth: AuthServiceProvider,
                private alert: AlertService,
                private storage: Storage,
                private loadingCtrl: LoadingController) { 
                  this.loginPicture = "http://www.inkbrothers.com.au/uploads/3/0/2/3/3023284/people_orig.png";
                }
                
    ngOnInit(){
      this.storage.get('currentUser').then((res) => {
        if(res){
          this.navCtrl.setRoot('HomePage');
        }
      });
    }

    public login() {
      this.showLoading();
      this.auth.login(this.credentials).subscribe(ok => {
        if (ok) {        
          this.navCtrl.setRoot('HomePage');
        } else {
          this.alert.presentAlert("Acesso Negado", "Usuário/Senha inválidos");
          this.loading.dismiss();
        }
      },
        error => {
          this.alert.presentAlert("Acesso Negado", "Usuário/Senha inválidos");
          this.loading.dismiss();
        });
    }

    showLoading() {
      this.loading = this.loadingCtrl.create({
        content: 'Aguarde...',
        dismissOnPageChange: true
      });
      this.loading.present();
    }

}
