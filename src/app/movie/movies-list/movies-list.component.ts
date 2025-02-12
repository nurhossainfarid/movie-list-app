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
  moviesList: MovieType[] = [];
  movieService: MovieService = inject(MovieService);

  constructor(private moviesService: MovieService) {
    moviesService.getAllMovies().subscribe((moviesList: MovieType[]) => {
      this.moviesList = moviesList;
    });
  }
  loadMovies() {
    this.movieService.getAllMovies().subscribe((moviesList: MovieType[]) => {
      this.moviesList = moviesList;
    });
  }

  deleteMovie(movie: MovieType) {
    this.movieService.deleteMovie(movie.id).subscribe(() => {
      this.loadMovies();
    });
  }
}
