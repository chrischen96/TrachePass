import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EducationalResourcesPage } from './educational-resources.page';

describe('EducationalResourcesPage', () => {
  let component: EducationalResourcesPage;
  let fixture: ComponentFixture<EducationalResourcesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationalResourcesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EducationalResourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
