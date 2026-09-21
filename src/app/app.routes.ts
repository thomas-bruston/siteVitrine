import { Routes } from '@angular/router';

// `loadComponent` charge chaque page à la demande (code splitting) plutôt que
// de tout inclure dans le bundle initial : la personne qui arrive sur
// l'Accueil ne télécharge pas le code de la page Projets tant qu'elle n'y
// va pas.
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/accueil/accueil').then((m) => m.Accueil),
  },
  {
    path: 'projets',
    loadComponent: () => import('./pages/projets/projets').then((m) => m.Projets),
  },
  {
    path: 'projets/:id',
    loadComponent: () =>
      import('./pages/projet-detail/projet-detail').then((m) => m.ProjetDetail),
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./pages/a-propos/a-propos').then((m) => m.APropos),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
