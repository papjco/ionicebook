import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { chapterComponent } from './chapter.component';

describe('chapterComponent', () => {
  let component: chapterComponent;
  let fixture: ComponentFixture<chapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ chapterComponent ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(chapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
