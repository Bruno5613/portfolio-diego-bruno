import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Translation } from '../interfaces/translation.interface';
import { spanishTranslations, englishTranslations, germanTranslations } from '../translations';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage: 'es' | 'en' | 'de' = 'es';
  
  private translations: Record<'es' | 'en' | 'de', Translation> = {
    es: spanishTranslations,
    en: englishTranslations,
    de: germanTranslations
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Only use localStorage in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage && ['es', 'en', 'de'].includes(savedLanguage)) {
        this.currentLanguage = savedLanguage as 'es' | 'en' | 'de';
      }
    }
  }

  setLanguage(language: 'es' | 'en' | 'de'): void {
    if (['es', 'en', 'de'].includes(language)) {
      this.currentLanguage = language;
      // Only use localStorage in browser environment
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('language', language);
      }
    }
  }

  getCurrentLanguage(): 'es' | 'en' | 'de' {
    return this.currentLanguage;
  }

  getTranslations(): Translation {
    return this.translations[this.currentLanguage];
  }
}