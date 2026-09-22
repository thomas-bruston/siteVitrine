import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  simpleAngular,
  simpleBitbucket,
  simpleCss,
  simpleDocker,
  simpleEslint,
  simpleFigma,
  simpleGit,
  simpleGithub,
  simpleHtml5,
  simpleJasmine,
  simpleJavascript,
  simpleJira,
  simpleMysql,
  simplePhp,
  simpleTailwindcss,
  simpleTrello,
  simpleTypescript,
} from '@ng-icons/simple-icons';
import {
  lucideComponent,
  lucideDatabase,
  lucidePlug,
  lucideRefreshCw,
  lucideUsers,
  lucideWaves,
  lucideWorkflow,
} from '@ng-icons/lucide';

interface Competence {
  label: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  imports: [NgIcon],
  selector: 'app-a-propos',
  viewProviders: [
    provideIcons({
      simpleAngular,
      simpleTypescript,
      simpleJavascript,
      simpleHtml5,
      simpleCss,
      simpleTailwindcss,
      simpleMysql,
      simplePhp,
      simpleGit,
      simpleGithub,
      simpleBitbucket,
      simpleDocker,
      simpleJira,
      simpleTrello,
      simpleEslint,
      simpleJasmine,
      simpleFigma,
      lucideWaves,
      lucideComponent,
      lucidePlug,
      lucideDatabase,
      lucideWorkflow,
      lucideRefreshCw,
      lucideUsers,
    }),
  ],
  styleUrl: './a-propos.css',
  templateUrl: './a-propos.html',
})
export class APropos {
  protected readonly competences: { titre: string; items: Competence[] }[] = [
    {
      titre: 'Front-end',
      items: [
        { label: 'Angular 21/22', icon: 'simpleAngular', color: '#DD0031' },
        { label: 'TypeScript', icon: 'simpleTypescript', color: '#3178C6' },
        { label: 'JavaScript', icon: 'simpleJavascript', color: '#F7DF1E' },
        { label: 'HTML5', icon: 'simpleHtml5', color: '#E34F26' },
        { label: 'CSS3', icon: 'simpleCss', color: '#1572B6' },
        { label: 'RxJS', icon: 'lucideWaves' },
        { label: 'Angular Material', icon: 'lucideComponent' },
        { label: 'Spartan UI', image: 'assets/spartan.webp' },
        { label: 'Tailwind CSS', icon: 'simpleTailwindcss', color: '#06B6D4' },
      ],
    },
    {
      titre: 'Back-end / Data',
      items: [
        { label: 'API REST', icon: 'lucidePlug' },
        { label: 'SQL', icon: 'lucideDatabase' },
        { label: 'MySQL', icon: 'simpleMysql', color: '#4479A1' },
        { label: 'PHP', icon: 'simplePhp', color: '#777BB4' },
      ],
    },
    {
      titre: 'Outils',
      items: [
        { label: 'Git', icon: 'simpleGit', color: '#F05032' },
        { label: 'GitHub', icon: 'simpleGithub', color: '#181717' },
        { label: 'Bitbucket', icon: 'simpleBitbucket', color: '#0052CC' },
        { label: 'Docker', icon: 'simpleDocker', color: '#2496ED' },
        { label: 'Jira', icon: 'simpleJira', color: '#0052CC' },
        { label: 'Trello', icon: 'simpleTrello', color: '#0052CC' },
        { label: 'ESLint', icon: 'simpleEslint', color: '#4B32C3' },
        { label: 'Jasmine', icon: 'simpleJasmine', color: '#8A4182' },
        { label: 'CI/CD', icon: 'lucideWorkflow' },
      ],
    },
    {
      titre: 'Design',
      items: [
        { label: 'Figma', icon: 'simpleFigma', color: '#F24E1E' },
        { label: 'Photoshop', image: 'assets/photoshop.webp' },
        { label: 'Illustrator', image: 'assets/illustrator.webp' },
      ],
    },
    {
      titre: 'Méthode',
      items: [
        { label: 'Agile', icon: 'lucideRefreshCw' },
        { label: 'Scrum', icon: 'lucideUsers' },
      ],
    },
  ];
}
