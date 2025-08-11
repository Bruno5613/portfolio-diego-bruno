import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslationService } from './services/translation.service';
import { Translation } from './interfaces/translation.interface';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Diego Bruno - Full Stack Developer';
  isDarkMode = true;
  isMobileMenuOpen = false;
  private observer!: IntersectionObserver;

  constructor(public translationService: TranslationService) {}

  ngOnInit() {
    // Force dark mode for navigation
    this.isDarkMode = true;
    this.applyTheme();
  }

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


  ngAfterViewInit() {
    this.setupScrollAnimations();
  }

  private setupScrollAnimations() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // Optionally unobserve after animation
          this.observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements.forEach(el => {
      this.observer.observe(el);
    });
  }


  private applyTheme() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

}
