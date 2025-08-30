export interface Product {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  price: string;
  originalPrice?: string;
  category: string;
  tags: string[];
  features: string[];
  images: {
    hero: string;
    gallery: string[];
    preview: string;
    carousel?: {
      type: 'image' | 'video';
      src: string;
      alt: string;
      title: string;
    }[];
  };
  links: {
    demo?: string;
    purchase: string;
    github?: string;
  };
  stats: {
    downloads?: number;
    rating?: number;
    reviews?: number;
  };
  specifications: {
    technology: string[];
    compatibility: string[];
    includes: string[];
  };
  themes?: {
    name: string;
    description: string;
    image: string;
    style: 'light' | 'dark';
  }[];
  perfectFor?: string[];
  whatYouGet?: {
    title: string;
    items: string[];
  }[];
  keyHighlights?: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  discount?: number;
}

export interface ProductsTranslation {
  // Navigation & General
  pageTitle: string;
  subtitle: string;
  description: string;
  digitalProducts: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  
  // Product Categories
  templates: string;
  extensions: string;
  apis: string;
  allProducts: string;
  
  // Product Details
  features: string;
  specifications: string;
  includes: string;
  technology: string;
  compatibility: string;
  
  // Actions & Links
  viewDemo: string;
  buyNow: string;
  viewDetails: string;
  getStarted: string;
  downloadFree: string;
  
  // Pricing & Offers
  price: string;
  originalPrice: string;
  discount: string;
  limitedTime: string;
  freeDownload: string;
  
  // Social Proof & Stats
  downloads: string;
  rating: string;
  reviews: string;
  customers: string;
  satisfaction: string;
  
  // Features & Benefits
  responsiveDesign: string;
  mobileFirst: string;
  crossBrowser: string;
  seoOptimized: string;
  fastLoading: string;
  easyCustomization: string;
  documentation: string;
  support: string;
  
  // SaaS Template Specific
  saasTemplate: {
    title: string;
    shortDescription: string;
    description: string;
    heroFeature: string;
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
    feature5: string;
    feature6: string;
    includes1: string;
    includes2: string;
    includes3: string;
    includes4: string;
    includes5: string;
    compatibility1: string;
    compatibility2: string;
    compatibility3: string;
    perfectFor: string;
    perfectFor1: string;
    perfectFor2: string;
    perfectFor3: string;
  };
  
  // CTA Section
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  
  // Testimonials & Reviews
  whatClientsSay: string;
  testimonialText: string;
  testimonialAuthor: string;
  
  // Coming Soon
  comingSoon: string;
  stayTuned: string;
  moreProducts: string;
}