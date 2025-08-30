import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { Translation } from '../../interfaces/translation.interface';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  constructor(
    public translationService: TranslationService,
    private router: Router
  ) {}

  get currentLanguage(): 'es' | 'en' | 'de' {
    return this.translationService.getCurrentLanguage();
  }

  changeLanguage(language: string | 'es' | 'en' | 'de') {
    const lang = language as 'es' | 'en' | 'de';
    this.translationService.setLanguage(lang);
  }

  get t(): Translation {
    return this.translationService.getTranslations();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  navigateToProducts(): void {
    this.closeMobileMenu();
    this.router.navigate(['/products']);
  }

  navigateToHome(): void {
    this.closeMobileMenu();
    this.router.navigate(['/']);
  }

  navigateToSection(section: string): void {
    this.closeMobileMenu();
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  }
}
