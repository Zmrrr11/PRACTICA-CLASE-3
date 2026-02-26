import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Avatar } from './components/avatar/avatar';  


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'practica-2';
}
