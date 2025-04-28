import { Component } from '@angular/core';
import { LucideAngularModule, MailIcon, Linkedin, MapPin } from 'lucide-angular';
import { I18nPipe } from "../../Pipes/i18n.pipe";

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule, I18nPipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  readonly MailIcon = MailIcon;
  readonly LinkedinIcon = Linkedin;
  readonly MapPinIcon = MapPin;
}
