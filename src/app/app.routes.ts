import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';

export const routesConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
    title: 'Movie Details',
  },
  {
    path: 'movie-edit/:id',
    component: MovieEditComponent,
    title: 'Movie Edit',
  },
];
