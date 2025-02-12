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
  file: File | null = null;
  fileUrl: string | null = null;
  fileContent: string = '';

  constructor() {
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

  // Handle file selection
  onFileSelected(event: any) {
    this.file = event.target.files[0];

    if (this.file) {
      const reader = new FileReader();

      // Show image, video
      if (this.file.type.includes('image')) {
        reader.onload = () => {
          this.fileUrl = reader.result as string;
        };
        reader.readAsDataURL(this.file);
      } else if (this.file.type.includes('video')) {
        reader.onload = () => {
          this.fileUrl = reader.result as string;
        };
        reader.readAsDataURL(this.file);
      }
    }
  }
}
