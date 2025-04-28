import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { FolderIcon } from 'lucide-angular';
import { I18nPipe } from '../../Pipes/i18n.pipe';
@Component({
  selector: 'app-projects',
  imports: [CommonModule, LucideAngularModule, I18nPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  readonly FolderIcon = FolderIcon;

  projects = [
    {
      title: {
        en: 'iMindNow',
        de: 'iMindNow',
        es: 'iMindNow',
      },
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/87/35/ef/8735ef18-ad31-942d-9a7e-384d4b123d34/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp',
      description: {
        en: 'iMindNow is the science-based, completely Spanish/English bilingual emotional health and wellness app that helps users feel fulfilled and cultivate balance and resilience.',
        de: 'iMindNow ist eine wissenschaftlich fundierte, vollständig zweisprachige (Spanisch/Englisch) App für emotionale Gesundheit und Wohlbefinden, die den Nutzern hilft, sich erfüllt zu fühlen und Resilienz aufzubauen.',
        es: 'iMindNow es una app de bienestar emocional bilingüe (español/inglés) basada en la ciencia que ayuda a los usuarios a sentirse plenos y cultivar equilibrio y resiliencia.',
      },
      tech: ['Flutter', 'Firebase', 'Node.js', 'SQL Server'],
      storeLink: 'https://apps.apple.com/us/app/imindnow/id6461120128',
    },
    {
      title: {
        en: 'Zkipp',
        de: 'Zkipp',
        es: 'Zkipp',
      },
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/1b/eb/4c/1beb4cfb-4ae7-660b-2c6b-58d27f4b7c28/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/460x0w.webp',
      description: {
        en: 'Zkipp is a Latin American app created during the pandemic to manage venue capacity, reaching 27 cities in Colombia and expanding to 4 Latin American countries.',
        de: 'Zkipp ist eine lateinamerikanische App, die während der Pandemie zur Kapazitätsverwaltung von Veranstaltungsorten entwickelt wurde sie erreichte 27 Städte in Kolumbien und expandierte in 4 weitere Länder.',
        es: 'Zkipp es una app creada por talento latinoamericano durante la pandemia para gestionar aforos, con presencia en 27 ciudades de Colombia y expansión a 4 países.',
      },
      tech: ['Flutter', '.NET', 'SQL Server'],
      storeLink: 'https://apps.apple.com/do/app/zkipp/id1540758221',
    },
  ];
}
