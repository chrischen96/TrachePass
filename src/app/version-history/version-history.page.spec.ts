import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VersionHistoryPage } from './version-history.page';

describe('VersionHistoryPage', () => {
  let component: VersionHistoryPage;
  let fixture: ComponentFixture<VersionHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VersionHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
