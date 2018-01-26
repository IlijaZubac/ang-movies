import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { MoviesComponent } from './movies/movies.component';
import { SearchComponent } from './search/search.component';
import { SearchpageComponent } from './searchpage/searchpage.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/movies',
        pathMatch: 'full'
    },
    {
        path: 'movies',
        component: MoviesComponent
    },
    {
      path: 'search/:term',
      component: SearchpageComponent
    }
]


@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}