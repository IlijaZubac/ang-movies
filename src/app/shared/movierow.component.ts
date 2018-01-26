import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-movierow',
  templateUrl: './movierow.component.html',

})
export class MovierowComponent implements OnInit {

  @Input() movieList: Movie;

  private movies: Movie[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.movieList);
  }

}
