import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { nanoid } from 'nanoid';
import { MovieService } from '../../movie.service';
import { MovieType } from '../../movie-type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css',
})
export class MovieFormComponent {
  movieData: MovieType | undefined;
  movieService: MovieService = inject(MovieService);

  constructor(private toastr: ToastrService) {}

  showSuccess(message: string) {
    this.toastr.success(message, 'Success');
  }

  showError(message: string) {
    this.toastr.error(message, 'Error');
  }

  showModal = false;
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  movieForm = new FormGroup({
    id: new FormControl(nanoid()),
    title: new FormControl('', Validators.required),
    language: new FormControl('', Validators.required),
    rating: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
  });

  languages = [
    { value: 'English', label: 'English' },
    { value: 'Bangla', label: 'Bangla' },
    { value: 'Hindi', label: 'Hindi' },
  ];

  addMovieInfo() {
    try {
      if (this.movieForm.valid) {
        const newMovie = {
          id: this.movieForm.value.id,
          title: this.movieForm.value.title,
          language: this.movieForm.value.language,
          rating: this.movieForm.value.rating,
        } as MovieType;
        this.movieService.createMovie(newMovie);
        this.showSuccess('Movie added successfully!');
        this.movieForm.reset();
        this.closeModal();
      }
    } catch (error) {
      this.showError('Failed to add movie!');
    }
  }
}
