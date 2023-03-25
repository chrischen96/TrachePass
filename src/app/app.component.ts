import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { LoginPage } from './login/login.page'
import { ModalController, Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core'

const { SplashScreen } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @HostListener('touchstart')
  onTouchStart() {
    this.restartIdleLogoutTimer();
  }

  public idleLogoutTimer;
  public isInLoginModal: boolean;

  constructor(
    private platform: Platform, 
    private router: Router,
    private modalCtrl: ModalController,
  ) {
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(() => {
      SplashScreen.hide();
    })
  }

  restartIdleLogoutTimer() {
    clearTimeout(this.idleLogoutTimer);
    console.log(this.router.url);
    if (!this.isInLoginModal && !(this.router.url == "/login")){
      this.idleLogoutTimer = setTimeout(()=>{
      this.lockApp();
      },120000);
      console.log('Touched / page started Timer reset');
    } else {
      console.log('inLogin')
    }
  }

  async lockApp(){
    clearTimeout(this.idleLogoutTimer);
    this.isInLoginModal = true;
    const modal = await this.modalCtrl.create({
      component: LoginPage,
      backdropDismiss: false,
      componentProps: {
        isModal: true
      },
      cssClass: 'login-modal'
    });
    modal.present();
    modal.onDidDismiss().then(() => {
      this.isInLoginModal = false;
      this.restartIdleLogoutTimer();
    })
  }

}
