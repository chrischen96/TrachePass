import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TracheostomyDetailsPage } from './tracheostomy-details.page';

describe('TracheostomyDetailsPage', () => {
  let component: TracheostomyDetailsPage;
  let fixture: ComponentFixture<TracheostomyDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracheostomyDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TracheostomyDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
