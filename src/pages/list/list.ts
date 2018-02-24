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

  constructor(public navCtrl: NavController, public navParams: NavParams, public movieService: MovieServiceProvider,private appPreferences: AppPreferences) {
    this.movieService.searchMovies("batman").subscribe(
        data => {
            this.movies = data.results;
            console.log(data);
        },
        err => {
            console.log(err);
        },
        () => console.log('Pesquisa completa dos filmes')
    );
  }

  searchForMovie(event, key) {
            this.movieService.searchMovies(event.target.value).subscribe(
                data => {
                    this.movies = data.results;
                    console.log(data);
                },
                err => {
                    console.log(err);
                },
                () => console.log('Pesquisa completa dos filmes')
            );
    }

    selectMovie(event, movie) {
        console.log(movie);
        this.navCtrl.push(InfoPage, {
            movie: movie
        });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
