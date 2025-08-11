import { Injectable } from '@angular/core';
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

  constructor() {
    // Load language from localStorage if available
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && ['es', 'en', 'de'].includes(savedLanguage)) {
      this.currentLanguage = savedLanguage as 'es' | 'en' | 'de';
    }
  }

  setLanguage(language: 'es' | 'en' | 'de'): void {
    if (['es', 'en', 'de'].includes(language)) {
      this.currentLanguage = language;
      localStorage.setItem('language', language);
    }
  }

  getCurrentLanguage(): 'es' | 'en' | 'de' {
    return this.currentLanguage;
  }

  getTranslations(): Translation {
    return this.translations[this.currentLanguage];
  }
}