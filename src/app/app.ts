import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Composant racine : il ne fait qu'accueillir le router-outlet pour le
// moment. La logique et l'affichage réels vivent dans les pages sous
// src/app/pages/.
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
