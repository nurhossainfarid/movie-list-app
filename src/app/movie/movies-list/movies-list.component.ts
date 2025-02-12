import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies-list',
  imports: [CommonModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent {
  movies = [
    { id: 'm1', title: 'Inception', language: 'English', rating: 5 },
    { id: 'm2', title: '3 Idiots', language: 'Hindi', rating: 5 },
    { id: 'm3', title: 'Poran', language: 'Bangla', rating: 4 },
    { id: 'm4', title: 'Interstellar', language: 'English', rating: 5 },
    { id: 'm5', title: 'PK', language: 'Hindi', rating: 4 },
  ];

  viewMovie(movie: any) {
    alert(`Viewing: ${movie.title}`);
  }

  editMovie(movie: any) {
    alert(`Editing: ${movie.title}`);
  }
}
