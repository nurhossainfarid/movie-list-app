import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MovieFormComponent } from './movie/movie-form/movie-form.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    MovieFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'moive-list-app';
}
