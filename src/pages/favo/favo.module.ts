import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoPage } from './favo';

@NgModule({
  declarations: [
    FavoPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoPage),
  ],
})
export class FavoPageModule {}
