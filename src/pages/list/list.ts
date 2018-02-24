import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { AppPreferences } from '@ionic-native/app-preferences';

import { MovieServiceProvider } from '../../providers/movie-service/movie-service';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  movies: Array<any>;
  prefe: AppPreferences;

  constructor(public navCtrl: NavController, public navParams: NavParams, public movieService: MovieServiceProvider,public appPreferences: AppPreferences) {
    this.movieService.searchMovies("batman").subscribe(
        data => {
            this.appPreferences.store('filme','batman',data.results);
            console.log("Gravou os dados em preferences" + data.results);
            this.movies=data.results;
        },
        err => {
            console.log(err);
        },
        () => console.log('Pesquisa completa dos filmes')
    );
    console.log("Gravou e passou aqui");
    this.appPreferences.fetch('filme','batman').then((res) => { console.log('Lendo batman'+res); });
  }

    selectMovie(event, movie) {
      console.log("EM INFO")
      this.appPreferences.store('teste','historico',movie);
        console.log(movie);
        this.navCtrl.push(InfoPage, {
            movie: movie
        });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
