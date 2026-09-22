import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJETS } from '../../data/projets';

@Component({
  imports: [RouterLink],
  selector: 'app-projets',
  styleUrl: './projets.css',
  templateUrl: './projets.html',
})
export class Projets {
  protected readonly projets = PROJETS;
}
