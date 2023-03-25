import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditOperativeHistoryPage } from './edit-operative-history.page';

describe('EditOperativeHistoryPage', () => {
  let component: EditOperativeHistoryPage;
  let fixture: ComponentFixture<EditOperativeHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOperativeHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditOperativeHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
