import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditPathologyPage } from './edit-pathology.page';

describe('EditPathologyPage', () => {
  let component: EditPathologyPage;
  let fixture: ComponentFixture<EditPathologyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPathologyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPathologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
