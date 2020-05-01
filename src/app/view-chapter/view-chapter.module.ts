import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewChapterPage } from './view-chapter.page';

import { IonicModule } from '@ionic/angular';

import { ViewMessagePageRoutingModule } from './view-chapter-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMessagePageRoutingModule
  ],
  declarations: [ViewChapterPage]
})
export class ViewMessagePageModule {}
