import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { nanoid } from 'nanoid';

@Component({
  selector: 'app-movie-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css',
})
export class MovieFormComponent {
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
    { value: 'english', label: 'English' },
    { value: 'bangla', label: 'Bangla' },
    { value: 'hindi', label: 'Hindi' },
  ];

  addMovieInfo() {
    if (this.movieForm.valid) {
      console.warn('Submitted Data:', this.movieForm.value);

      this.movieForm.reset();
      this.closeModal();
    }
  }
}
