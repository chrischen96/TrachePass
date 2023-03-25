import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms'
import { UserDataService } from '../services/user-data.service'; 

@Component({
  selector: 'app-edit-medical-conditions',
  templateUrl: './edit-medical-conditions.page.html',
  styleUrls: ['./edit-medical-conditions.page.scss'],
})
export class EditMedicalConditionsPage implements OnInit {
  public form : FormGroup;
  
  constructor(private modalCtrl:ModalController, 
    public fb: FormBuilder,
    public userDataService:UserDataService,
  ) {
    this.form = this.fb.group({
      allergies: ['',Validators.required],
      medications: ['', Validators.required],
      otherMedicalConditions: ['', Validators.required],
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
    this.modalCtrl.dismiss();
    location.reload();
  }

}
