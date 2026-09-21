import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

// Composant racine : porte le header et le footer communs à toutes les
// pages ; le contenu qui change vit dans les pages sous src/app/pages/,
// affichées via le router-outlet.
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Calculé une seule fois au chargement : suffisant pour un copyright de
  // footer, pas besoin d'un Signal ici (rien ne le fait changer en cours de vie de la page).
  protected readonly currentYear = new Date().getFullYear();
}
