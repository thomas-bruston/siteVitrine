import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJETS } from '../../data/projets';

@Component({
  imports: [RouterLink],
  selector: 'app-projet-detail',
  styleUrl: './projet-detail.css',
  templateUrl: './projet-detail.html',
})
export class ProjetDetail {
  readonly id = input<string>();

  protected readonly projet = computed(() => PROJETS.find((p) => p.id === this.id()));
}
