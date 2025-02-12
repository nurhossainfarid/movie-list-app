import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieType } from '../../movie-type';
import { MovieService } from '../../movie.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent {
  movieService: MovieService = inject(MovieService);
  moviesList = this.movieService.moviesList;

  constructor() {
    this.movieService.getAllMovies().subscribe();
  }

  deleteMovie(movie: MovieType) {
    this.movieService.deleteMovie(movie.id).subscribe();
  }
}
