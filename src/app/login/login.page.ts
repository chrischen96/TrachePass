import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { ModalController } from '@ionic/angular';
import { LoginService } from '../services/login.service'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input()isModal: boolean;

  public passwordForm: FormGroup;
  public setPasswordForm: FormGroup;
  public isBioAvaliable: any;
  public isPWsetted: Boolean;
  public isPWwrong: Boolean;
  public isPWConfirmNotEqual: Boolean;

  constructor(
    private faio: FingerprintAIO, 
    private router: Router, 
    private modalCtrl: ModalController, 
    public formBuilder: FormBuilder, 
    public loginService: LoginService
  ) {
    this.passwordForm = this.formBuilder.group({
      inputPW: ['', Validators.required]
    })
    this.setPasswordForm = this.formBuilder.group({
      setPW: ['', Validators.required],
      confirmPW: ['', Validators.required]
    })
    //here because ngOnInit don't run in modal
    //this.loginService.stopPauseMonitor();
  }

  async ngOnInit() {
    await this.loginService.loadPW();
    this.isPWsetted = "password" in this.loginService.login;
    this.isBioAvaliable = await this.faio.isAvailable();
    console.log(this.isBioAvaliable);
  }
  
  async loginBio(){
    await this.faio.show({
      title: "Tracheostomy App",
      description: "Authenticate"
    }).then((result: any)=>{
      console.log("authentication result", result);
      this.loginHandling();
    }).catch((error: any) => {
      console.log(error);
    })
  }

  loginPW(){
    if (this.passwordForm.value['inputPW'] === this.loginService.login["password"]){
      console.log("password correct")
      this.loginHandling();
      this.isPWwrong = false;
    } else {
      this.isPWwrong = true;
    }
  }
    
  setPW() {
    const userInput = this.setPasswordForm.value["setPW"];
    const confirmInput = this.setPasswordForm.value["confirmPW"];
    //console.log(userInput);
    if (userInput === confirmInput) {
      this.loginService.setPW(userInput);
      this.isPWsetted = "password" in this.loginService.login;
    } else {
      this.isPWConfirmNotEqual = true;
    }
    //console.log(this.isPWsetted);
  }

  async loginHandling() {
    if (this.isModal) {
      this.modalCtrl.dismiss();
    } else {
      this.router.navigate(['home']);
    }
  }
}
