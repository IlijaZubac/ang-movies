import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { movieList } from './examples';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class MoviesService {

  private movieList: Movie []; 

  constructor() { 
    this.movieList = movieList.map((movie) => {
      return new Movie(
        movie.id,
        movie.name,
        movie.director,
        movie.imageUrl,
        movie.duration,
        movie.realeaseDate,
        movie.genres,
      )}
    
    )}
    public getMovies()
  {
    return new Observable((o: Observer<any>) => {
        o.next(this.movieList);
        return o.complete();
      });
  }


  }
