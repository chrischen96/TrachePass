import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms'
import { UserDataService } from '../services/user-data.service'; 
import { PhotoService } from '../services/photo.service';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';

@Component({
  selector: 'app-edit-operative-history',
  templateUrl: './edit-operative-history.page.html',
  styleUrls: ['./edit-operative-history.page.scss'],
})
export class EditOperativeHistoryPage implements OnInit {
  public form: FormGroup;
  public history = {};
  public tuple = [];
  public operativeHistoryString = '';
  public operativeHistoryJSON = {};
  public photos = [];
  public histories = [];

  constructor(
    private modalCtrl:ModalController,
    public fb: FormBuilder,
    public userDataService:UserDataService,
    public photoService: PhotoService,
  ) { 
    this.form = this.fb.group({
      date: ['',Validators.required],
      type: ['',Validators.required],
      details: ['',Validators.required],
    });
    this.history['photos'] = '';
  }

  ngOnInit() {
    this.operativeHistoryString = this.userDataService.medicalRecordValue['operativeHistory'];
    if(this.operativeHistoryString!='' && this.operativeHistoryString!=null){
      this.operativeHistoryJSON = JSON.parse(this.operativeHistoryString);
    }
  }

  async addPhotoToGallery(){
    this.history['photos'] = await this.photoService.addNewToGallery(this.photos);
    this.photos = JSON.parse(this.history['photos']);
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  async save(){
    
    Object.keys(this.form.controls).forEach(key => {
      this.history[key]=this.form.value[key];
      console.log(key, this.history[key]);
    });

    this.histories.push(this.history);
    
    Object.keys(this.operativeHistoryJSON).forEach(key => {
      this.histories.push(this.operativeHistoryJSON[key]);
      console.log(this.histories);
    });
    for(let i=0; i<this.histories.length; i++){
      for(let j=i+1; j<this.histories.length; j++){
        if(this.histories[i].date<this.histories[j].date){
          let history = this.histories[i];
          this.histories[i]=this.histories[j];
          this.histories[j]=history;
        }  
      }
    }
    for(let i=0; i<this.histories.length; i++){
      this.operativeHistoryJSON[i]=this.histories[i];
    } // order histories by date

    this.operativeHistoryString = JSON.stringify(this.operativeHistoryJSON);
    this.userDataService.medicalRecordValue['operativeHistory'] = this.operativeHistoryString;
    // construct a JSON, then stringify it to store

    console.log(this.userDataService.medicalRecordValue['operativeHistory']);
    this.userDataService.saveMedicalRecord();
    location.reload();
  }

  async openViewer(srcPath) {
    const modal = await this.modalCtrl.create({
      component: ViewerModalComponent,
      componentProps: {
        src: srcPath
      },
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true
    });
    await modal.present();
  }

}
