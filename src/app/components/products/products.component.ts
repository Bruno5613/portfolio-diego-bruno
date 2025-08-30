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
  private autoScrollInterval!: any;
  currentSlide = 0;
  currentUseCaseSlide = 0;
  Math = Math;

  products: Product[] = [
    {
      id: 'saas-starter-pack',
      title: 'SaaS Landing Page Starter Pack',
      description: 'Transform Your SaaS Business with Professional Landing Pages. Launch your SaaS with confidence using this complete starter pack built by a Computer Engineer with years of experience creating high-converting landing pages.',
      shortDescription: 'Complete professional SaaS landing page template pack with 11 unique themes, dark mode, and modern tech stack',
      price: '$29',
      originalPrice: '$49',
      category: 'Landing Page Templates',
      tags: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Responsive', 'SaaS', 'Dark Mode'],
      features: [
        '11 Professional Themes (Light + Dark Mode)',
        '2 Complete Templates (Main Landing + Signup Page)',
        '12 Modular HTML Components',
        '100% Tailwind CSS - No custom CSS needed',
        'Mobile-first responsive design',
        'JavaScript theme system with localStorage',
        'Conversion-optimized based on successful SaaS pages',
        'Complete documentation and setup guides',
        'Build tools included (npm run dev/build/preview)',
        'Bonus: Smart chat bot component and scroll animations'
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
        preview: 'gumroad-thumbnail.png',
        carousel: [
          { type: 'image', src: 'file%20cover%20-%201.png', alt: 'SaaS Landing Page Starter Pack Cover', title: 'Professional Cover Design' },
          { type: 'video', src: 'videos/theme-switcher-demo-hq-silent.mp4', alt: 'Theme Switcher Demo', title: 'Interactive Theme Switching' },
          { type: 'image', src: 'Presentation.png', alt: '11 Professional Themes Overview', title: '11 Professional Themes' },
          { type: 'image', src: 'mobile-experience.png', alt: 'Mobile Experience', title: 'Mobile-First Design' },
          { type: 'image', src: 'Frame%201.png', alt: 'Template Features', title: 'Complete Feature Set' },
          { type: 'image', src: 'mobile.png', alt: 'Mobile Responsive Design', title: 'Perfect Mobile Experience' }
        ]
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
        technology: ['HTML5', 'Tailwind CSS v3.4+', 'Modern JavaScript ES6+', 'npm Build System'],
        compatibility: ['All modern browsers', 'Mobile-first responsive', 'Dark/Light mode', 'SEO optimized'],
        includes: [
          '2 Complete Landing Pages (Main + Signup)',
          '11 Professional Themes with Light + Dark Mode',
          '12 Modular HTML Components',
          '100% Tailwind CSS Architecture',
          'JavaScript Theme Switcher with localStorage',
          'Complete Documentation (Setup, Customization, Components)',
          'npm Build Tools (dev/build/preview)',
          'Bonus: Smart Chat Bot Component',
          'Scroll Animations with Intersection Observer',
          'Form Validation with Accessibility',
          'SEO Structure (Meta Tags, Schema Markup)',
          'Analytics Ready (GA4 integration)',
          'Lighthouse 95+ Performance Target'
        ]
      },
      themes: [
        { name: 'Professional Blue', description: 'Corporate, trustworthy', image: 'themes/hero__professional-blue__light.png', style: 'light' },
        { name: 'Professional Blue', description: 'Corporate, trustworthy', image: 'themes/hero__professional-blue__dark.png', style: 'dark' },
        { name: 'Modern Purple', description: 'Creative, innovative', image: 'themes/hero__modern-purple__light.png', style: 'light' },
        { name: 'Modern Purple', description: 'Creative, innovative', image: 'themes/hero__modern-purple__dark.png', style: 'dark' },
        { name: 'Growth Green', description: 'Finance, sustainability', image: 'themes/hero__growth-green__light.png', style: 'light' },
        { name: 'Growth Green', description: 'Finance, sustainability', image: 'themes/hero__growth-green__dark.png', style: 'dark' },
        { name: 'Executive Red', description: 'Bold, attention-grabbing', image: 'themes/hero__executive-red__light.png', style: 'light' },
        { name: 'Executive Red', description: 'Bold, attention-grabbing', image: 'themes/hero__executive-red__dark.png', style: 'dark' },
        { name: 'Corporate Charcoal', description: 'Professional, minimal', image: 'themes/hero__corporate-charcoal__light.png', style: 'light' },
        { name: 'Corporate Charcoal', description: 'Professional, minimal', image: 'themes/hero__corporate-charcoal__dark.png', style: 'dark' },
        { name: 'Energy Amber', description: 'Dynamic, creative', image: 'themes/hero__energy-amber__light.png', style: 'light' },
        { name: 'Energy Amber', description: 'Dynamic, creative', image: 'themes/hero__energy-amber__dark.png', style: 'dark' },
        { name: 'Ocean Teal', description: 'Medical, wellness', image: 'themes/hero__ocean-teal__light.png', style: 'light' },
        { name: 'Ocean Teal', description: 'Medical, wellness', image: 'themes/hero__ocean-teal__dark.png', style: 'dark' },
        { name: 'Premium Bronze', description: 'Luxury, craftsmanship', image: 'themes/hero__premium-bronze__light.png', style: 'light' },
        { name: 'Premium Bronze', description: 'Luxury, craftsmanship', image: 'themes/hero__premium-bronze__dark.png', style: 'dark' },
        { name: 'Sky Blue', description: 'Travel, freedom', image: 'themes/hero__sky-blue__light.png', style: 'light' },
        { name: 'Sky Blue', description: 'Travel, freedom', image: 'themes/hero__sky-blue__dark.png', style: 'dark' },
        { name: 'Royal Indigo', description: 'Premium, sophisticated', image: 'themes/hero__royal-indigo__light.png', style: 'light' },
        { name: 'Royal Indigo', description: 'Premium, sophisticated', image: 'themes/hero__royal-indigo__dark.png', style: 'dark' },
        { name: 'Titanium Steel', description: 'Industrial, modern', image: 'themes/hero__titanium-steel__light.png', style: 'light' },
        { name: 'Titanium Silver', description: 'Industrial, modern', image: 'themes/hero__titanium-silver__dark.png', style: 'dark' }
      ],
      perfectFor: [
        'SaaS startups launching new products',
        'B2B software companies needing professional pages',
        'Digital agencies delivering client projects',
        'Entrepreneurs building software businesses',
        'Developers wanting modern, maintainable templates'
      ],
      whatYouGet: [
        {
          title: '11 Professional Themes',
          items: [
            'Professional Blue - Corporate, trustworthy',
            'Modern Purple - Creative, innovative',
            'Growth Green - Finance, sustainability',
            'Executive Red - Bold, attention-grabbing',
            'And 7 more unique color schemes',
            'Each theme includes Light + Dark mode variations'
          ]
        },
        {
          title: '2 Complete Templates',
          items: [
            'Main Landing Page - Hero, features, pricing, testimonials, FAQ, CTA',
            'Signup Page - Conversion-optimized trial signup',
            'Fully responsive and mobile-optimized',
            'Ready to customize and deploy'
          ]
        },
        {
          title: 'Modern Tech Stack',
          items: [
            '100% Tailwind CSS - No custom CSS needed',
            'Modular component architecture (12 reusable components)',
            'Mobile-first responsive design',
            'JavaScript theme system with localStorage persistence',
            'Dark mode with system detection + manual toggle'
          ]
        }
      ],
      keyHighlights: [
        'Quick Setup - npm install, customize, deploy',
        'Theme Switching - Users can switch between 11 themes',
        'Mobile Optimized - Perfect on all devices',
        'Built with modern web standards',
        'Complete Documentation',
        'Conversion Optimized - Based on analysis of successful SaaS pages',
        'Built by Expert - Computer Engineer with modern web development expertise',
        'Future Proof - Uses current web standards and best practices'
      ],
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
        this.startAutoScroll();
      }, 100);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  get t(): Translation {
    return this.translationService.getTranslations();
  }

  trackByProduct(_index: number, product: Product): string {
    return product.id;
  }

  getIconForPerfectFor(item: string): string {
    if (item.includes('startup')) return '🚀';
    if (item.includes('B2B') || item.includes('software companies')) return '🏢';
    if (item.includes('agenc')) return '🎨';
    if (item.includes('entrepreneur')) return '💡';
    if (item.includes('developer')) return '👨‍💻';
    return '✨';
  }

  nextSlide(product: Product): void {
    if (product.images.carousel) {
      this.currentSlide = (this.currentSlide + 1) % product.images.carousel.length;
    }
  }

  prevSlide(product: Product): void {
    if (product.images.carousel) {
      this.currentSlide = this.currentSlide === 0 
        ? product.images.carousel.length - 1 
        : this.currentSlide - 1;
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  startAutoScroll(): void {
    this.autoScrollInterval = setInterval(() => {
      this.nextUseCaseSlide();
    }, 3000); // Auto-scroll every 3 seconds
  }

  nextUseCaseSlide(): void {
    const product = this.products[0]; // Assuming single product
    if (product.themes) {
      // Move by 3 cards (33.333% each), but stop at the end
      const maxSlide = Math.max(0, product.themes.length - 3);
      this.currentUseCaseSlide = this.currentUseCaseSlide >= maxSlide ? 0 : this.currentUseCaseSlide + 1;
    }
  }

  prevUseCaseSlide(): void {
    const product = this.products[0];
    if (product.themes) {
      const maxSlide = Math.max(0, product.themes.length - 3);
      this.currentUseCaseSlide = this.currentUseCaseSlide <= 0 ? maxSlide : this.currentUseCaseSlide - 1;
    }
  }

  goToUseCaseSlide(index: number): void {
    this.currentUseCaseSlide = index;
  }

  pauseAutoScroll(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  resumeAutoScroll(): void {
    this.startAutoScroll();
  }

  // Theme carousel spotlight methods
  getCenterCardClass(index: number): string {
    const visiblePosition = index - this.currentUseCaseSlide;
    const isCenterCard = visiblePosition === 1; // Center card in 3-card view
    
    if (isCenterCard) {
      return 'w-2/5 flex-shrink-0 px-2 transform scale-105 z-10'; // Wider and slightly scaled up
    } else {
      return 'w-1/3 flex-shrink-0 px-3'; // Standard size, no scaling
    }
  }

  getThemeCardClass(index: number): string {
    const visiblePosition = index - this.currentUseCaseSlide;
    const isCenterCard = visiblePosition === 1;
    
    const baseClass = 'relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border group';
    
    if (isCenterCard) {
      return baseClass + ' shadow-2xl shadow-blue-500/20 border-blue-200 dark:border-blue-700 ring-2 ring-blue-500/20';
    } else {
      return baseClass + ' shadow-lg hover:shadow-xl border-gray-200 dark:border-gray-700';
    }
  }

  isCenterCard(index: number): boolean {
    const visiblePosition = index - this.currentUseCaseSlide;
    return visiblePosition === 1;
  }

  getImageContainerClass(index: number): string {
    const visiblePosition = index - this.currentUseCaseSlide;
    const isCenterCard = visiblePosition === 1;
    
    if (isCenterCard) {
      return 'aspect-[4/3] bg-gray-100 dark:bg-gray-600 relative group'; // Taller aspect ratio for center
    } else {
      return 'aspect-video bg-gray-100 dark:bg-gray-600 relative group'; // Standard video aspect ratio
    }
  }

  getOverlayTextClass(index: number): string {
    const visiblePosition = index - this.currentUseCaseSlide;
    const isCenterCard = visiblePosition === 1;
    
    if (isCenterCard) {
      return 'text-white font-bold text-base'; // Larger text for center card
    } else {
      return 'text-white font-semibold text-sm'; // Standard text size
    }
  }

  getContentClass(index: number): string {
    const visiblePosition = index - this.currentUseCaseSlide;
    const isCenterCard = visiblePosition === 1;
    
    if (isCenterCard) {
      return 'px-6 py-3'; // Reduced vertical padding for center card
    } else {
      return 'px-4 py-3'; // Reduced vertical padding for side cards
    }
  }

  getTitleClass(index: number): string {
    const visiblePosition = index - this.currentUseCaseSlide;
    const isCenterCard = visiblePosition === 1;
    
    if (isCenterCard) {
      return 'font-bold text-gray-900 dark:text-white text-base'; // Larger title for center
    } else {
      return 'font-semibold text-gray-900 dark:text-white text-sm'; // Standard title size
    }
  }

  getBadgeClass(index: number, style: string): string {
    const visiblePosition = index - this.currentUseCaseSlide;
    const isCenterCard = visiblePosition === 1;
    
    const baseClass = 'px-3 py-1 rounded-full font-medium';
    const sizeClass = isCenterCard ? 'text-sm' : 'text-xs';
    const colorClass = style === 'dark' ? 'bg-gray-800 text-white dark:bg-gray-600' : 'bg-gray-200 text-gray-800';
    
    return `${baseClass} ${sizeClass} ${colorClass}`;
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
