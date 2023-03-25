import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms'
import { UserDataService } from '../services/user-data.service'; 
import { PhotoService } from '../services/photo.service';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';

@Component({
  selector: 'app-view-operative-history',
  templateUrl: './view-operative-history.page.html',
  styleUrls: ['./view-operative-history.page.scss'],
})
export class ViewOperativeHistoryPage implements OnInit {
  @Input()index: number;
  public form: FormGroup;
  public history = {};
  public tuple = [];
  public operativeHistoryString = '';
  public operativeHistoryJSON = {};
  public photos=[];

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
  }

  ngOnInit() {
    this.operativeHistoryString = this.userDataService.medicalRecordValue['operativeHistory'];
    if(this.operativeHistoryString!='' && this.operativeHistoryString!=null){
      this.operativeHistoryJSON = JSON.parse(this.operativeHistoryString);
    };
    this.history = this.operativeHistoryJSON[this.index];
    this.form.get('date').setValue(this.history['date']);
    this.form.get('type').setValue(this.history['type']);
    this.form.get('details').setValue(this.history['details']);
    if(this.history['photos']!=""){
      this.photos=JSON.parse(this.history['photos']);
    }  
    this.photoService.loadSaved(this.photos);
  }

  async addPhotoToGallery(){
    this.history['photos'] = await this.photoService.addNewToGallery(this.photos);
    this.photos = JSON.parse(this.history['photos']);
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

  async save(){
    Object.keys(this.form.controls).forEach(key => {
      this.history[key]=this.form.value[key];
      console.log(key, this.history[key]);
    });
    console.log('photos', this.history['photos'])
    this.operativeHistoryJSON[this.index] = this.history;
    this.operativeHistoryString = JSON.stringify(this.operativeHistoryJSON);
    this.userDataService.medicalRecordValue['operativeHistory'] = this.operativeHistoryString;
    // construct a JSON, then stringify it to store

    console.log(this.userDataService.medicalRecordValue['operativeHistory']);
    this.userDataService.saveMedicalRecord();
    location.reload();
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }
}
