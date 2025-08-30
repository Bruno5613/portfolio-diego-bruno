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
    
    // Overview
    overviewTitle: string;
    
    // Package Contents
    packageContentsTitle: string;
    packageSection1: string;
    packageSection2: string;
    packageSection3: string;
    
    // Themes
    themesTitle: string;
    themesSubtitle: string;
    
    // Use Cases
    useCasesTitle: string;
    useCase1: string;
    useCase2: string;
    useCase3: string;
    useCase4: string;
    useCase5: string;
    
    // Features
    featuresTitle: string;
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
    feature5: string;
    feature6: string;
    feature7: string;
    feature8: string;
    
    // Bonus Features
    bonusFeaturesTitle: string;
    bonusFeature1: string;
    bonusFeature2: string;
    bonusFeature3: string;
    bonusFeature4: string;
    
    // Why Choose
    whyChooseTitle: string;
    whyReason1: string;
    whyReason2: string;
    whyReason3: string;
    whyReason4: string;
    
    // What's Included
    whatsIncludedTitle: string;
    include1: string;
    include2: string;
    include3: string;
    include4: string;
    include5: string;
    include6: string;
    include7: string;
    include8: string;
    include9: string;
    include10: string;
    include11: string;
    include12: string;
    include13: string;
    
    // Technical
    technologyTitle: string;
    tech1: string;
    tech2: string;
    tech3: string;
    tech4: string;
    
    compatibilityTitle: string;
    compat1: string;
    compat2: string;
    compat3: string;
    compat4: string;
    
    // Guarantees
    guaranteeInstant: string;
    guaranteeUpdates: string;
    guaranteeSupport: string;
    
    // Call to Action
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
    
    // Built by
    builtBy: string;
    
    // Actions & Buttons
    getInstantAccess: string;
    liveDemo: string;
    
    // Technical section title
    technicalInfoTitle: string;
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