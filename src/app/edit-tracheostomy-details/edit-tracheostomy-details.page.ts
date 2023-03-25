import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { pickerController } from '@ionic/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms'
import { UserDataService } from '../services/user-data.service'; 

@Component({
  selector: 'app-edit-tracheostomy-details',
  templateUrl: './edit-tracheostomy-details.page.html',
  styleUrls: ['./edit-tracheostomy-details.page.scss'],
})
export class EditTracheostomyDetailsPage implements OnInit {
  public form: FormGroup;
  public subTypeList: Object = {};
  public sizeIDList: Object =  {};
  public shaftLength: string = '';

  constructor(
    private modalCtrl:ModalController,
    public fb: FormBuilder,
    public userDataService:UserDataService,
  ) {
    this.form = this.fb.group({
      tubeType: ['', Validators.required],
      subType: ['', Validators.required],
      sizeID: ['', Validators.required],
      shaftLength: ['', Validators.required],
      suctionLength: ['', Validators.required],
      scheduleForChange: ['', Validators.required],
      customize: ['', Validators.required],
    })
   }

  async ngOnInit() {
    await this.userDataService.loadMedicalRecord();
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key).setValue(this.userDataService.medicalRecordValue[key]);
      if (this.userDataService.medicalRecordValue['customize'] == null){
        this.form.get('customize').setValue(false);
      }
      console.log(key, this.form.get(key).value)
    });
    if (this.form.value['customize'] == false) {
      console.log(this.form.value["customize"]);
      console.log(this.form.value["tubeType"]);
      this.subTypeList = this.tubeTypes[this.form.value["tubeType"]];
      console.log(this.subTypeList);
      this.sizeIDList = this.subTypeList[this.form.value["subType"]];
      console.log(this.sizeIDList);
      this.shaftLength = this.sizeIDList[this.form.value["sizeID"]];
      console.log(this.shaftLength);
    }
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

  toggleCustom() {
    this.form.patchValue({
      tubeType:"",
      subType: "",
      sizeID: "",
      shaftLength:"",
    });
    console.log(this.form.value['customize']);
  }

  selectedTubeType() {
    console.log(this.form.value.tubeType);
    this.subTypeList = this.tubeTypes[this.form.value.tubeType];
    this.form.get('subType').setValue('');
    this.form.get('sizeID').setValue('');
    this.form.get('shaftLength').setValue('');
    this.shaftLength = '';
  }

  selectedSubTubeType(){
    console.log(this.subTypeList);
    console.log(this.form.value.subType)
    this.sizeIDList = this.subTypeList[this.form.value.subType];
    this.form.get('sizeID').setValue('');
    this.form.get('shaftLength').setValue('');
    this.shaftLength = '';
  } 

  selectedSize(){
    this.shaftLength = this.sizeIDList[this.form.value.sizeID];
    this.form.get('shaftLength').setValue(this.shaftLength);
  }

  // Bivona Uncuffed, Bivona Fome-Cuf, Bivona Aire-Cuf, Bivona TTS cuff
  // Bivona Flextend also share the same size
  public type1 = {
    "Neo (neonatal)":{
      "2.5":"30",
      "3.0":"32",
      "3.5":"34",
      "4.0":"36",
    },
    "Ped (paediatric)": {
      "2.5":"38",
      "3.0":"39",
      "3.5":"40",
      "4.0":"41",
      "4.5":"42",
      "5.0":"44",
      "5.5":"46",
    },
  }

  // Bivona Hyperflex
  public type2 = {
    "N/A": {
      "2.5":"55",
      "3.0":"60",
      "3.5":"65",
      "4.0":"70",
      "4.5":"75",
      "5.0":"80",
      "5.5":"85",
    },
  }

  //shiley uncuffed
  public type3 = {
    "Neo (neonatal)":{
      "4.5":"36",
    },
    "Ped (Paediatric)": {
      "3.0":"39",
      "3.5":"40",
      "4.0":"41",
      "4.5":"42",
      "5.0":"44",
      "5.5":"46",
    },
    "Ped - Long": {
      "5.0":"50",
      "5.5":"52",
      "6.0":"54",
      "6.5":"56",
    },
  }
  //shiley cuffed
  public type4 = {
    "Ped (Paediatric)": {
      "3.0":"39",
      "3.5":"40",
      "4.0":"41",
      "4.5":"42",
      "5.0":"44",
      "5.5":"46",
    },
    "Ped - Long": {
      "5.0":"50",
      "5.5":"52",
      "6.0":"54",
      "6.5":"56",
    },
  }

  //Adul Portex Blue Line Ultra
  public subtype5 = {
    "6.0":"64.5",
    "7.0":"70"
  }
  public type5 = {
    "Cuffed unfenstrated":this.subtype5,
    "Cuffed fenstrated":this.subtype5,
    "Uncuffed fenstrated":this.subtype5,
  }

  //Adult Bivona
  public subtype6 = {
    "5.0":"60",
    "6.0":"70",
    "7.0":"80",
  }
  public type6 = {
    "Cuffed unfenstrated":this.subtype6,
    "Cuffed fenstrated":this.subtype6,
    "Uncuffed fenstrated":this.subtype6,
  }
  
  //logic of chain select
  public tubeTypes = {
    "Bivona Uncuffed" : this.type1,
    "Bivona Fome-Cuf" : this.type1,
    "Bivona Aire-Cuf" : this.type1,
    "Bivona TTS cuff": this.type1,
    "Bivona Flextend" : this.type1,
    "Bivona Hyperflex" : this.type2,
    "Shiley Uncuffed": this.type3,
    "Shiley Cuffed": this.type4,
    "Adult Portex Blue Line Ultra": this.type5,
    "Adult Bivona": this.type6,
  }

}
