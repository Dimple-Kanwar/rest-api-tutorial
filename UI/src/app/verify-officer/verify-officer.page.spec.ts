import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyOfficerPage } from './verify-officer.page';

describe('VerifyOfficerPage', () => {
  let component: VerifyOfficerPage;
  let fixture: ComponentFixture<VerifyOfficerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyOfficerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyOfficerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
