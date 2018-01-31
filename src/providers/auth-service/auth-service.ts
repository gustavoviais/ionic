import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Observable } from "rxjs/Observable";
import { isUndefined } from "ionic-angular/util/util";
import { uri } from "../utils/constants";

@Injectable()
export class AuthServiceProvider{
    currentUser: Object;
    constructor(public http: HttpClient, private storage: Storage){}
    public login(credentials){
        if(credentials.login === null || credentials.senha === null){
            return Observable.throw("Por favor, insira seu dados");
        }else{
            return Observable.create(observer => {
                let access: Boolean;
                this.http
                    .get(
                        `${uri}/usuario?login=${
                            credentials.login
                        }&senha=${credentials.senha}`
                    )
                    .subscribe(res =>{
                        if(res[0]){
                            this.currentUser = res[0];
                            access = true;
                            localStorage.setItem("token", "Ok");
                            this.storage.set("currentUser", this.currentUser);
                        }else{
                            access = false;
                        }
                        if(!isUndefined(access)){
                            observer.next(access);
                            observer.complete();
                        }
                    });
            });
        }
    }
}