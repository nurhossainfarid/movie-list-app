import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from '../movie/movies-list/movies-list.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MoviesListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
