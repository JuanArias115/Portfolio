import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { I18nPipe } from '../../Pipes/i18n.pipe';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [CommonModule, I18nPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  setLanguage(lang: 'en' | 'de' | 'es') {
    I18nPipe.setLang(lang);
    console.log('Language set to:', lang);
  }
}
