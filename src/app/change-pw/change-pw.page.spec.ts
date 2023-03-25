import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChangePWPage } from './change-pw.page';

describe('ChangePWPage', () => {
  let component: ChangePWPage;
  let fixture: ComponentFixture<ChangePWPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePWPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangePWPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
