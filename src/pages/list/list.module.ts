import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from './list';

import { MovieServiceProvider } from '../../providers/movie-service/movie-service';

@NgModule({
  declarations: [
    ListPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPage),
  ],
  providers: [
    MovieServiceProvider,
  ]
})
export class ListPageModule {}
