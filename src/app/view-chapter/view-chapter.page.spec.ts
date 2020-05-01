import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ViewchapterPageRoutingModule } from './view-chapter-routing.module';

import { ViewChapterPage } from './view-chapter.page';

describe('ViewChapterPage', () => {
  let component: ViewChapterPage;
  let fixture: ComponentFixture<ViewChapterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChapterPage ],
      imports: [IonicModule.forRoot(), ViewchapterPageRoutingModule, RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewChapterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
