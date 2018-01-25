import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MoviesComponent } from './movies/movies.component';
import { AppRoutingModule } from './app-routing.module';
import { MoviesService } from './shared/movies.service';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MoviesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
