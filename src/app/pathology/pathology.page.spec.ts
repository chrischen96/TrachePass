import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PathologyPage } from './pathology.page';

describe('PathologyPage', () => {
  let component: PathologyPage;
  let fixture: ComponentFixture<PathologyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathologyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PathologyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
