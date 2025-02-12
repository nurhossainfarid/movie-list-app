import { Injectable } from '@angular/core';
import { MovieType } from './movie-type';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  url: string = 'http://localhost:5000/movies';
  constructor(private http: HttpClient) {}

  // Create Movie
  createMovie(movie: MovieType): Observable<MovieType> {
    return this.http.post<MovieType>(this.url, movie);
  }

  // Get All Movies
  getAllMovies(): Observable<MovieType[]> {
    return this.http.get<MovieType[]>(this.url);
  }

  // Get Movie By Id
  getMovieById(id: number): Observable<MovieType> {
    return this.http.get<MovieType>(`${this.url}/${id}`);
  }

  // Update Movie
  updateMovie(movie: MovieType): Observable<MovieType> {
    return this.http.put<MovieType>(`${this.url}/${movie.id}`, movie);
  }

  // Delete Movie
  deleteMovie(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
