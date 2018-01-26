import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../shared/movie';
import { Router } from '@angular/router';
//import {SearchModule } from './../search/search.module';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

    private movies: Movie[];
    private term;

    constructor(private movieService: MoviesService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        let term = this.route.snapshot.paramMap.get('term');

        this.movieService.searchMovie(term).subscribe(data => {
            this.movies = data;
            this.term = term;
        }, (term) => {
            alert('There are no movies with searched term: ' + term);
            this.router.navigate(['movies']);
        });
      }

}
