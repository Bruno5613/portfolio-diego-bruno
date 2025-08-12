import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { Translation } from '../../interfaces/translation.interface';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  constructor(public translationService: TranslationService) {}

  get t(): Translation {
    return this.translationService.getTranslations();
  }
}
