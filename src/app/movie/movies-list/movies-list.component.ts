import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieType } from '../../movie-type';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-movies-list',
  imports: [CommonModule],
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

  viewMovie(movie: any) {
    alert(`Viewing: ${movie.title}`);
  }

  editMovie(movie: any) {
    alert(`Editing: ${movie.title}`);
  }
}
