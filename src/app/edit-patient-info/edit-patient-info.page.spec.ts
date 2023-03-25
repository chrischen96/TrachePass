import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditPatientInfoPage } from './edit-patient-info.page';

describe('EditPatientInfoPage', () => {
  let component: EditPatientInfoPage;
  let fixture: ComponentFixture<EditPatientInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPatientInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPatientInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
