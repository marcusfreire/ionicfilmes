import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { AppPreferences } from '@ionic-native/app-preferences';

import { ListPage } from '../pages/list/list';
import { InfoPage } from '../pages/info/info';
import { FavoPage } from '../pages/favo/favo';
import { HistPage } from '../pages/hist/hist';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieServiceProvider } from '../providers/movie-service/movie-service';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    InfoPage,
    HistPage,
    FavoPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    InfoPage,
    HistPage,
    FavoPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieServiceProvider,
    AppPreferences
  ]
})
export class AppModule {}
