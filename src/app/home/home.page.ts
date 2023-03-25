import { Component } from '@angular/core';
import { LoginService } from '../services/login.service'; 
import { Plugins, Capacitor, } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public LoginService: LoginService,
  ) {
  }

  async ngOnInit() {
    console.log("started app");
  }

}
