import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpenVersionPage } from './open-version.page';

describe('OpenVersionPage', () => {
  let component: OpenVersionPage;
  let fixture: ComponentFixture<OpenVersionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenVersionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpenVersionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
