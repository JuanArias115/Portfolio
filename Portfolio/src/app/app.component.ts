import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './Components/header/header.component';
import { HeroComponent } from './Components/hero/hero.component';
import { WorkExperienceComponent } from './Components/work-experience/work-experience.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { AboutComponent } from './Components/about/about.component';
import { FooterComponent } from './Components/footer/footer.component';
import { Title } from '@angular/platform-browser';
import { I18nPipe } from './Pipes/i18n.pipe';
import { Router, NavigationEnd } from '@angular/router';
declare let gtag: Function;

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    AboutComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'juanarias';

  constructor(private titleService: Title, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-501P3TFGPM', {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }
  ngOnInit(): void {
    const title = {
      en: 'Juan David Arias | Software Developer',
      de: 'Juan David Arias | Softwareentwickler',
      es: 'Juan David Arias | Desarrollador de Software',
    };

    this.titleService.setTitle(I18nPipe.prototype.transform(title));
  }
}
