import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../movie.service';
import { MovieType } from '../../movie-type';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  movieService = inject(MovieService);
  movieData: MovieType | undefined;
  file: File | null = null;
  fileUrl: string | null = null;
  fileContent: string = '';

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.params['id'];
    this.movieService.getMovieById(movieId).subscribe({
      next: (movie) => {
        if (movie) {
          this.movieData = movie;
        } else {
          this.toastr.error('Movie not found');
        }
      },
      error: (err) => {
        this.toastr.error('Failed to load movie');
      },
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
