import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { BriefcaseIcon } from 'lucide-angular';
import { I18nPipe } from "../../Pipes/i18n.pipe";

@Component({
  selector: 'app-work-experience',
  imports: [CommonModule, LucideAngularModule, I18nPipe],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css',
})
export class WorkExperienceComponent {
  readonly BriefcaseIcon = BriefcaseIcon;
}
