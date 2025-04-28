import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { UserIcon } from 'lucide-angular';
import { I18nPipe } from "../../Pipes/i18n.pipe";

@Component({
  selector: 'app-about',
  imports: [CommonModule, LucideAngularModule, I18nPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  readonly UserIcon = UserIcon;
}
