import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service'; 
import { Validators, FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component'


@Component({
  selector: 'app-change-pw',
  templateUrl: './change-pw.page.html',
  styleUrls: ['./change-pw.page.scss'],
})
export class ChangePWPage implements OnInit {

  public setPasswordForm: FormGroup;
  public isPWConfirmNotEqual: Boolean;
  public isPWwrong: Boolean;
  public isChangePWSuceed: Boolean;

  constructor(
    public formBuilder: FormBuilder, 
    public loginService: LoginService,
    public appComponent: AppComponent,
  ) {
    this.setPasswordForm = this.formBuilder.group({
      oldPW: ['', Validators.required],
      setPW: ['', Validators.required],
      confirmPW: ['', Validators.required]
    });
  }

  async ngOnInit() {
    await this.loginService.loadPW();
  }

  confirmloginPW(){
    if (this.setPasswordForm.value['oldPW'] === this.loginService.login["password"]){
      //this.loginService.timeOut();
      console.log("password correct")
      this.isPWwrong = false;
      this.setPW();
      this.appComponent.lockApp();
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
      this.isChangePWSuceed = true;
    } else {
      this.isPWConfirmNotEqual = true;
    }
  }
}
