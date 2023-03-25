import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewOperativeHistoryPage } from './view-operative-history.page';

describe('ViewOperativeHistoryPage', () => {
  let component: ViewOperativeHistoryPage;
  let fixture: ComponentFixture<ViewOperativeHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOperativeHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewOperativeHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
