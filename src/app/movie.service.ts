import { Injectable, signal } from '@angular/core';
import { MovieType } from './movie-type';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private url: string = 'http://localhost:5000/movies';

  private moviesListSignal = signal<MovieType[]>([]);

  constructor(private http: HttpClient) {}

  get moviesList() {
    return this.moviesListSignal;
  }

  // **Fetch All Movies**
  getAllMovies(): Observable<MovieType[]> {
    return this.http
      .get<MovieType[]>(this.url)
      .pipe(tap((movies) => this.moviesListSignal.set(movies)));
  }

  // **Create a Movie**
  createMovie(movie: MovieType): Observable<MovieType> {
    return this.http.post<MovieType>(this.url, movie).pipe(
      tap((newMovie) => {
        this.moviesListSignal.update((movies) => [...movies, newMovie]);
      })
    );
  }

  // **Get a Single Movie by ID**
  getMovieById(id: string): Observable<MovieType> {
    return this.http.get<MovieType>(`${this.url}/${id}`);
  }

  // **Update a Movie and Modify Signal**
  updateMovie(movie: MovieType): Observable<MovieType> {
    return this.http.put<MovieType>(`${this.url}/${movie.id}`, movie).pipe(
      tap((updatedMovie) => {
        this.moviesListSignal.update((movies) =>
          movies.map((m) => (m.id === updatedMovie.id ? updatedMovie : m))
        );
      })
    );
  }

  // **Delete a Movie and Remove it from Signal**
  deleteMovie(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
      tap(() => {
        this.moviesListSignal.update((movies) =>
          movies.filter((m) => m.id !== id)
        );
      })
    );
  }
}
