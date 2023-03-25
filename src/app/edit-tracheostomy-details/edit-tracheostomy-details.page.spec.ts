import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditTracheostomyDetailsPage } from './edit-tracheostomy-details.page';

describe('EditTracheostomyDetailsPage', () => {
  let component: EditTracheostomyDetailsPage;
  let fixture: ComponentFixture<EditTracheostomyDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTracheostomyDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditTracheostomyDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
