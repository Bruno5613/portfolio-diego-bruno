import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslationService } from './services/translation.service';
import { Translation } from './interfaces/translation.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Diego Bruno - Full Stack Developer';
  isDarkMode = true;
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

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const contactData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string
    };

    // For now, just log the data and show an alert
    console.log('Contact form submitted:', contactData);
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    form.reset();
  }
}
