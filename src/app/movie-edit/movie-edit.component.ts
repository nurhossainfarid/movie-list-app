import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { MovieType } from '../movie-type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-edit',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './movie-edit.component.html',
  styleUrl: './movie-edit.component.css',
})
export class MovieEditComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  movieService = inject(MovieService);
  movieData: MovieType | undefined;

  movieForm = new FormGroup({
    title: new FormControl(''),
    language: new FormControl(''),
    rating: new FormControl(0, [Validators.min(1), Validators.max(5)]),
  });

  constructor(private toastr: ToastrService) {
    const movieId = this.route.snapshot.params['id'];
    this.movieService
      .getMovieById(movieId)
      .then((movieData: MovieType | undefined) => {
        if (movieData) {
          this.movieData = movieData;
        } else {
          console.error('Movie data not found');
        }
      });
  }

  showSuccess(message: string) {
    this.toastr.success(message, 'Success');
  }

  showError(message: string) {
    this.toastr.error(message, 'Error');
  }

  languages = [
    { value: 'English', label: 'English' },
    { value: 'Bangla', label: 'Bangla' },
    { value: 'Hindi', label: 'Hindi' },
  ];

  updateMovieInfo() {
    try {
      const updatedMovie = {
        id: this.movieData?.id,
        title: !this.movieForm.value.title
          ? this.movieData?.title
          : this.movieForm.value.title,
        language: !this.movieForm.value.language
          ? this.movieData?.language
          : this.movieForm.value.language,
        rating: !this.movieForm.value.rating
          ? this.movieData?.rating
          : this.movieForm.value.rating,
      } as MovieType;
      console.log(updatedMovie);
      this.movieService.updateMovie(updatedMovie);
      this.showSuccess('Movie added successfully!');
      this.router.navigate([`/movie/${this.movieData?.id}`]);
    } catch (error) {
      this.showError('Failed to add movie!');
    }
  }
}
