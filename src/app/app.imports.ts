//Providers
import { ToastService } from '../providers/utils/toast.service';
import { AlertService } from '../providers/utils/alert.service';
import { ScannerServiceProvider } from '../providers/scanner-service/scanner-service';
import { AuthServiceProvider } from "../providers/auth-service/auth-service";

//Native Providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClientModule } from "@angular/common/http";

//Modules
import { ProfilePageModule } from '../pages/profile/profile.module';
import { ReportPageModule } from '../pages/report/report.module';
import { ScannerPageModule } from '../pages/scanner/scanner.module';
import { LoginPageModule } from '../pages/login/login.module';

//Native Modules
import { BrowserModule } from '@angular/platform-browser';
import { HomePageModule } from '../pages/home/home.module';
import { IonicStorageModule } from '@ionic/storage';

export const PROVIDERS = [
    ToastService,
    AlertService,
    ScannerServiceProvider,
    AuthServiceProvider
]

export const NATIVEPROVIDERS = [
    StatusBar,
    SplashScreen,
    Camera,
    BarcodeScanner
]

export const MODULES = [
    HomePageModule,
    ProfilePageModule,
    ReportPageModule,
    ScannerPageModule,
    LoginPageModule,
    HttpClientModule   
]

export const NATIVEMODULES = [
    BrowserModule,    
    IonicStorageModule.forRoot()
    
]