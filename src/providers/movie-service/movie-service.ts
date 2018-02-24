import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieServiceProvider {

  constructor(public http: Http) {
    console.log('Hello MovieServiceProvider Provider');
  }

  searchMovies(movieName) {
      var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + movieName + '&api_key=da169b13baae8222394c1d4ffb57222d';
      var response = this.http.get(url).map(res => res.json());
      console.log(response);
      return response;
  }

}
