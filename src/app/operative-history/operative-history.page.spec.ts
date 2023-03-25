import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperativeHistoryPage } from './operative-history.page';

describe('OperativeHistoryPage', () => {
  let component: OperativeHistoryPage;
  let fixture: ComponentFixture<OperativeHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperativeHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperativeHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
