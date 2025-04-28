import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { LinkedinIcon, GithubIcon, InstagramIcon } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly LinkedinIcon = LinkedinIcon;
  readonly GithubIcon = GithubIcon;
  readonly InstagramIcon = InstagramIcon;
}
