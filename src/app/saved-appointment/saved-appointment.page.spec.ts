import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavedAppointmentPage } from './saved-appointment.page';

describe('SavedAppointmentPage', () => {
  let component: SavedAppointmentPage;
  let fixture: ComponentFixture<SavedAppointmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedAppointmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavedAppointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
