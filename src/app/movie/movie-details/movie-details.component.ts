import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../movie.service';
import { MovieType } from '../../movie-type';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  movieService = inject(MovieService);
  movieData: MovieType | undefined;

  constructor() {
    const movieId = this.route.snapshot.params['id'];
    this.movieService
      .getMovieById(movieId)
      .then((movieData: MovieType | undefined) => {
        if (movieData) {
          console.log(movieData);
          this.movieData = movieData;
        } else {
          console.error('Movie data not found');
        }
      });
  }
}
