import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditMedicalConditionsPage } from './edit-medical-conditions.page';

describe('EditMedicalConditionsPage', () => {
  let component: EditMedicalConditionsPage;
  let fixture: ComponentFixture<EditMedicalConditionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMedicalConditionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditMedicalConditionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
