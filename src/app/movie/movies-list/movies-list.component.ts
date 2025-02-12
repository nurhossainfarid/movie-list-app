import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieType } from '../../movie-type';
import { MovieService } from '../../movie.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent {
  moviesList: MovieType[] = [];
  movieService: MovieService = inject(MovieService);

  constructor() {
    this.movieService.getAllMovies().then((moviesList: MovieType[]) => {
      this.moviesList = moviesList;
    });
  }

  deleteMovie(movie: any) {
    this.movieService.deleteMovie(movie.id).then(() => {
      this.movieService.getAllMovies().then((moviesList: MovieType[]) => {
        this.moviesList = moviesList;
      });
    });
  }
}
