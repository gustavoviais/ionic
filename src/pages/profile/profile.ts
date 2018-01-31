import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from "ionic-angular";
import { Storage } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { ToastService } from '../../providers/utils/toast.service';
import { AlertService } from '../../providers/utils/alert.service';
import { OnInit } from '@angular/core'

@IonicPage()
@Component({
    selector: 'page-profile', //apelido
    templateUrl: 'profile.html'
})
export class ProfilePage implements OnInit {

    private placeholderPicture:string;
    private profilePicture:string;

    user = {id:"", name:"", email:"", imageUrl:""};

    constructor(public navCtrl: NavController,
        private toastService: ToastService,
        private alertService: AlertService,
        private storage: Storage,
        private camera: Camera
    ) {
        this.placeholderPicture = "https://api.adorable.io/avatar/200/bob";
     }

    ngOnInit() {        
        this.storage.get('currentUser').then((res) => {
            this.user.id = res.id;
            this.user.name = res.nome;
            this.user.email = res.email;
            //this.user.imageUrl = res.urlFoto;
        });
    }

    logout(){
        this.storage.remove("currentUser");
        this.navCtrl.setRoot('LoginPage');
    }

    openGallery(): void{
        let cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 100,
            targetWidth: 1000,
            targetHeight: 1000,
            encondingType: this.camera.EncodingType.JPEG,
            correctOrientation: true 
        };

        this.camera
            .getPicture(cameraOptions)
            .then(
                imageData => this.updateImage(imageData),
                err => this.toastService.presentToast("Error: " + err)
            );
    }

    updateImage(value){
        this.profilePicture = "data:image/jpeg;base64," + value;
        //localStorage.setItem("imageUrl", this.profilePicture);
        this.storage.set("imageUrl", this.profilePicture);
        this.user.imageUrl = this.profilePicture;
    }

    callToaster() {
        this.toastService.presentToast("Teste");
    }

    callAlert() {
        this.alertService.presentAlert("Título", "Subtítulo");
    }

    callConfirmAlert() {
        this.alertService.presentConfirm("Título", "Mensagem?");
    }

}
