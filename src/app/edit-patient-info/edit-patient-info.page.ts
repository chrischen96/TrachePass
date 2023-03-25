import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service'; 
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms'
import { Router} from '@angular/router'
import { pickerController } from '@ionic/core'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-patient-info',
  templateUrl: './edit-patient-info.page.html',
  styleUrls: ['./edit-patient-info.page.scss'],
})
export class EditPatientInfoPage implements OnInit {
  public form: FormGroup;
  private relationOptions = [
    [
      'Mother',
      'Father',
      'Grandparent',
      'Care Worker',
      'Other'
    ]
  ];
  private sexOptions = [
    [
      'Male',
      'Female',
      'Other'
    ]
  ];

  constructor(
    public userDataService: UserDataService, 
    public fb: FormBuilder,
    public router: Router,
    private modalCtrl:ModalController
  ) { 
    this.form = this.fb.group({
      name:['', Validators.required],
      birthDate: ['', Validators.required],
      sex: ['', Validators.required],
      nhsNumber: ['', Validators.required],
      hospitalNumber: ['', Validators.required],
      relation1: ['', Validators.required],
      r1Name: ['', Validators.required],
      relation2: ['', Validators.required],
      r2Name: ['', Validators.required],
      consultant:['', Validators.required],
      trust: ['', Validators.required],
      emergencyContact: ['', Validators.required],
    }); //need more validate later
  }

  async ngOnInit() {
    await this.userDataService.loadUserProfile();
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key).setValue(this.userDataService.userProfileValue[key]);
      console.log(key, this.form.get(key).value)
    });
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

  save() {
    Object.keys(this.form.controls).forEach(key => {
      this.userDataService.userProfileValue[key]=this.form.value[key];
      console.log(key, this.form.get(key).value)
    });
    this.userDataService.saveUserProfile();
    this.modalCtrl.dismiss();
    location.reload();
  }

//picker for relations
  async openPicker1(numColumns = 1, numOptions = 5, columnOptions = this.relationOptions){
    const picker = await pickerController.create({
      columns: this.getColumns(numColumns, numOptions, columnOptions),
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: (value) => {
            console.log(value);
            this.form.controls['relation1'].setValue(value['col-0']['text']);
          }
        }
      ]
    });
    await picker.present();
  }

  async openPicker2(numColumns = 1, numOptions = 5, columnOptions = this.relationOptions){
    const picker = await pickerController.create({
      columns: this.getColumns(numColumns, numOptions, columnOptions),
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: (value) => {
            console.log(value);
            this.form.controls['relation2'].setValue(value['col-0']['text']);
          }
        }
      ]
    });
    await picker.present();
  }

  async openPickerSex(numColumns = 1, numOptions = 3, columnOptions = this.sexOptions){
    const picker = await pickerController.create({
      columns: this.getColumns(numColumns, numOptions, columnOptions),
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: (value) => {
            console.log(value);
            this.form.controls['sex'].setValue(value['col-0']['text']);
          }
        }
      ]
    });
    await picker.present();
  }

  getColumns(numColumns, numOptions, columnOptions) {
    let columns = [];
    for (let i = 0; i < numColumns; i++) {
      columns.push({
        name: `col-${i}`,
        options: this.getColumnOptions(i, numOptions, columnOptions)
      });
    }
    return columns;
  }

  getColumnOptions(columnIndex, numOptions, columnOptions) {
    let options = [];
    for (let i = 0; i < numOptions; i++) {
      options.push({
        text: columnOptions[columnIndex][i % numOptions],
        value: i
      })
    }
    return options;
  }
}
