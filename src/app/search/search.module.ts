import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { SearchpageComponent } from '../searchpage/searchpage.component';

@NgModule({

  imports: [
    CommonModule,
    FormsModule
    
  ],

  declarations: [
    SearchComponent,
    SearchpageComponent
  ],
  exports: [
    SearchComponent,
    SearchpageComponent
  ]

})
export class SearchModule { 
    SearchComponent
}
