import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { Translation } from '../../interfaces/translation.interface';
import { Product } from '../../interfaces/products.interface';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  private observer!: IntersectionObserver;

  products: Product[] = [
    {
      id: 'saas-starter-pack',
      title: 'SaaS Landing Page Starter Pack',
      description: 'Complete professional SaaS landing page template pack with 11 unique themes',
      shortDescription: 'Professional SaaS landing page template pack with 11 themes',
      price: '$29',
      originalPrice: '$49',
      category: 'Templates',
      tags: ['HTML', 'CSS', 'Tailwind', 'Responsive', 'SaaS'],
      features: [
        '11 professional themes with light and dark mode',
        '100% Tailwind CSS architecture',
        'Modular reusable component system',
        'Conversion-optimized and mobile-first',
        'Clean, well-documented code',
        'Easy customization and maintenance'
      ],
      images: {
        hero: 'images/saas-template-preview.png',
        gallery: [
          'themes/hero__executive-red__light.png',
          'themes/hero__growth-green__dark.png',
          'themes/hero__modern-purple__dark.png',
          'themes/hero__professional-blue__light.png',
          'Presentation.png',
          'file%20cover%20-%201.png'
        ],
        preview: 'gumroad-thumbnail.png'
      },
      links: {
        demo: 'https://saas-starter-demo.diego-bruno.dev',
        purchase: 'https://diegobrunodev.gumroad.com/l/saas-landing-page-starter-pack'
      },
      stats: {
        downloads: 150,
        rating: 4.9,
        reviews: 25
      },
      specifications: {
        technology: ['HTML5', 'Tailwind CSS', 'JavaScript'],
        compatibility: ['All modern browsers', 'Responsive design', 'Mobile-first'],
        includes: ['11 complete templates', 'CSS source files', 'Documentation', 'Support']
      },
      isNew: true,
      isFeatured: true,
      discount: 40
    }
  ];

  constructor(
    public translationService: TranslationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    // Setup scroll animations only in browser
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.setupScrollAnimations();
      }, 100);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  get t(): Translation {
    return this.translationService.getTranslations();
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
}
