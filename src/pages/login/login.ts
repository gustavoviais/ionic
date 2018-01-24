import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from "ionic-angular";

@IonicPage()
@Component({
  selector: 'page-login', //apelido
  templateUrl: 'login.html'
})
export class LoginPage {

    constructor(public navCtrl: NavController) {

    }

}
