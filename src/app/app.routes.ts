import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routesConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
];
