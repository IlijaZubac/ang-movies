import { Component, OnInit } from '@angular/core';
import { Movie } from './../shared/movie';
import { MoviesService } from '../shared/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie;
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(
      data => {this.movie = data;}
    )
  }

}
