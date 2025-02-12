import { Injectable } from '@angular/core';
import { MovieType } from './movie-type';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url = 'http://localhost:5000/movies';
  constructor() {}

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

      await response.json();
    } catch (error: any) {
      alert(error.message);
    }
  }

  async getAllMovies(): Promise<MovieType[]> {
    const response = await fetch(this.url);
    const data = (await response.json()) ?? [];
    return data;
  }

  async getMovieById(id: number): Promise<MovieType | undefined> {
    const response = await fetch(`${this.url}/${id}`);
    const data = (await response.json()) ?? {};
    return data;
  }
  
  async updateMovie(movie: MovieType) {
    try {
      const response = await fetch(`${this.url}/${movie.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      await response.json();
    } catch (error: any) {
      alert(error.message);
    }
  }

  async deleteMovie(id: string) {
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      await response.json();
    } catch (error: any) {
      alert(error.message);
    }
  }
}
