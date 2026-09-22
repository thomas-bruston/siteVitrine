import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmSheetImports } from '@spartan-ng/helm/sheet';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faBrandGithub, faBrandLinkedinIn } from '@ng-icons/font-awesome/brands';
import { lucideMenu } from '@ng-icons/lucide';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HlmButton, HlmSheetImports, NgIcon],
  viewProviders: [provideIcons({ faBrandGithub, faBrandLinkedinIn, lucideMenu })],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly currentYear = new Date().getFullYear();
}
