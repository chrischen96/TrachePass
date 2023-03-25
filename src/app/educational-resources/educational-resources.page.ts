import { Component, OnInit } from '@angular/core';
//load browser plugin
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;

import { LoginService } from '../services/login.service'; 

@Component({
  selector: 'app-educational-resources',
  templateUrl: './educational-resources.page.html',
  styleUrls: ['./educational-resources.page.scss'],
})
export class EducationalResourcesPage implements OnInit {

  constructor(public loginService: LoginService) {
    Browser.addListener('browserPageLoaded', () => {
      console.log('called browser')
    })
    Browser.addListener('browserFinished', () => {
      console.log('loaded')
    })
    //prefetch url fr faster loading
    Browser.prefetch({
      urls: ["https://www.gosh.nhs.uk/wards-and-departments/departments/clinical-specialties/tracheostomy-information-children-parents-and-healthcare-professionals/", 
    "https://www.gosh.nhs.uk/wards-and-departments/departments/clinical-specialties/tracheostomy-information-children-parents-and-healthcare-professionals/training-videos/"]
    })
    //this.loginService.timeOut();
  };


  
  //due to limitation of browser plugin the app is unable to listen when the browser close so the lock app function must be paused in this screen
  async ngOnInit() {
    //await this.loginService.stopPauseMonitor();
  }

  async ngOnDestroy(){
    //await this.loginService.startPauseMonitor();
  }

  async TracheotomyGOSH() {
    await Browser.open({url: "https://www.gosh.nhs.uk/wards-and-departments/departments/clinical-specialties/tracheostomy-information-children-parents-and-healthcare-professionals/"});
  }

  async TracheotomyVideo() {
    await Browser.open({url: "https://www.gosh.nhs.uk/wards-and-departments/departments/clinical-specialties/tracheostomy-information-children-parents-and-healthcare-professionals/training-videos/"});
  }


}
