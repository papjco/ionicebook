import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontComponent } from './front.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FrontRoutingModule } from './front-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrontRoutingModule
  ],
  declarations: [FrontComponent]
})
export class FrontModule { }
