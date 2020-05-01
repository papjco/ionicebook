import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewChapterPage } from './view-chapter.page';

import { IonicModule } from '@ionic/angular';

import { ViewchapterPageRoutingModule } from './view-chapter-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewchapterPageRoutingModule
  ],
  declarations: [ViewChapterPage]
})
export class ViewchapterPageModule {}
