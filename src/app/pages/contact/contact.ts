import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faBrandGithub, faBrandLinkedinIn } from '@ng-icons/font-awesome/brands';
import { lucideMail } from '@ng-icons/lucide';

@Component({
  imports: [NgIcon],
  selector: 'app-contact',
  viewProviders: [provideIcons({ faBrandGithub, faBrandLinkedinIn, lucideMail })],
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  private readonly user = 'tombruston';
  private readonly domain = 'gmail.com';

  protected get mailtoHref(): string {
    return `mailto:${this.user}@${this.domain}`;
  }
}
