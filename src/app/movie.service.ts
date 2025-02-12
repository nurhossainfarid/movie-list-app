import { Injectable } from '@angular/core';
import { MovieType } from './movie-type';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url = 'http://localhost:5000/movies';
  constructor() {}

  async getAllMovies(): Promise<MovieType[]> {
    const response = await fetch(this.url);
    const data = (await response.json()) ?? [];
    return data;
  }

  async createMovie(movie: MovieType) {
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Application submitted:', result);
    } catch (error: any) {
      alert(error.message);
    }
  }
}
