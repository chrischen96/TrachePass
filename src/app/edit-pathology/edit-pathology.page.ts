import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms'
import { UserDataService } from '../services/user-data.service'; 

@Component({
  selector: 'app-edit-pathology',
  templateUrl: './edit-pathology.page.html',
  styleUrls: ['./edit-pathology.page.scss'],
})
export class EditPathologyPage implements OnInit {
  @Input()isModal: boolean;
  public form: FormGroup;
  public tubeSizeList = ['2.5','3.0','3.5','4.0','4.5','5.0','6.0','7.0','8.0'];

  constructor(private modalCtrl:ModalController, 
    public fb: FormBuilder,
    public userDataService:UserDataService,
  ) { 
    this.form = this.fb.group({
      pathology: ['',Validators.required],
      intubatation: ['', Validators.required],
      airwayGrade: ['', Validators.required],
      tubeSize: ['', Validators.required],
      details: ['', Validators.required],
    });
  }

  async ngOnInit() {
    await this.userDataService.loadMedicalRecord();
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key).setValue(this.userDataService.medicalRecordValue[key]);
      console.log(key, this.form.get(key).value)
    });
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  save(){
    Object.keys(this.form.controls).forEach(key => {
      this.userDataService.medicalRecordValue[key]=this.form.value[key];
      console.log(key, this.form.get(key).value)
    });
    this.userDataService.saveMedicalRecord();
    location.reload();
  }

  intubatation(){
    console.log(this.form.value.intubatation);
  }

}
