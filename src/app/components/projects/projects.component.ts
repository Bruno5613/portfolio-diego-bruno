import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { Translation } from '../../interfaces/translation.interface';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  constructor(public translationService: TranslationService) {}

  get t(): Translation {
    return this.translationService.getTranslations();
  }
}
