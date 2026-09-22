import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmPopoverImports } from '@spartan-ng/helm/popover';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faBrandGithub, faBrandLinkedinIn } from '@ng-icons/font-awesome/brands';
import { lucideFolderKanban, lucideHouse, lucideMail, lucideMenu, lucideUser } from '@ng-icons/lucide';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, HlmButton, HlmPopoverImports, NgIcon],
  viewProviders: [
    provideIcons({
      faBrandGithub,
      faBrandLinkedinIn,
      lucideMenu,
      lucideHouse,
      lucideFolderKanban,
      lucideUser,
      lucideMail,
    }),
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly currentYear = new Date().getFullYear();
}
