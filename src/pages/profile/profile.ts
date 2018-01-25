import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from "ionic-angular";
import { ToastService } from '../../providers/utils/toast.service';
import { AlertService } from '../../providers/utils/alert.service';

@IonicPage()
@Component({
    selector: 'page-profile', //apelido
    templateUrl: 'profile.html'
})
export class ProfilePage {

    constructor(public navCtrl: NavController, 
                private toastService: ToastService, 
                private alertService: AlertService) { }

    callToaster(){
        this.toastService.presentToast("Teste");
    }

    callAlert(){
        this.alertService.presentAlert("Título", "Subtítulo");
    }

    callConfirmAlert(){
        this.alertService.presentConfirm("Título", "Mensagem?");
    }

}
