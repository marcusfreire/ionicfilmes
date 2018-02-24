import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { AppPreferences } from '@ionic-native/app-preferences';

/**
 * Generated class for the HistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hist',
  templateUrl: 'hist.html',
})
export class HistPage{
  movies: Array<any>;
  prefeHist: AppPreferences;

  constructor(public navCtrl: NavController, public navParams: NavParams,public appPreferences: AppPreferences) {
      console.log("Gravou e passou aqui HISTORICO");
      this.appPreferences.fetch('filme','batman').then((res) => {this.movies=res; });
  }

  selectMovie(event, movie) {
      console.log(movie);
      this.navCtrl.push(InfoPage, {
          movie: movie
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistPage');
  }

}
