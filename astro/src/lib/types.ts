export interface StrapiImage {
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: { url: string; width: number; height: number };
    small?: { url: string; width: number; height: number };
    medium?: { url: string; width: number; height: number };
    large?: { url: string; width: number; height: number };
  };
}

export interface SEOMetadata {
  metaTitle: string;
  metaDescription: string;
  ogImage?: StrapiImage;
  canonicalUrl?: string;
  noIndex?: boolean;
  structuredData?: Record<string, unknown>;
}

export interface CTAButton {
  label: string;
  url: string;
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  openInNewTab?: boolean;
}

export interface HeroBlock {
  __component: 'blocks.hero-section';
  headline: string;
  subheadline?: string;
  backgroundImage?: StrapiImage;
  primaryCta?: CTAButton;
  secondaryCta?: CTAButton;
  trustBadges?: Array<{ icon?: StrapiImage; label: string }>;
}

export interface FeatureBlock {
  __component: 'blocks.feature-section';
  tagline?: string;
  title: string;
  description?: string;
  image?: StrapiImage;
  imagePosition: 'left' | 'right';
  bulletPoints?: Array<{ icon?: StrapiImage; text: string }>;
  cta?: CTAButton;
  badge?: string;
}

export interface PainPointItem {
  number: number;
  title: string;
  description: string;
  icon?: StrapiImage;
}

export interface PainPointsBlock {
  __component: 'blocks.pain-points-section';
  sectionTitle?: string;
  items: PainPointItem[];
}

export interface ComparisonRow {
  metric: string;
  beforeValue: string;
  afterValue: string;
}

export interface BeforeAfterBlock {
  __component: 'blocks.before-after-table';
  title?: string;
  beforeLabel?: string;
  afterLabel?: string;
  rows: ComparisonRow[];
}

export interface CompetitorCard {
  name: string;
  logo?: StrapiImage;
  weakness: string;
}

export interface CompetitorComparisonBlock {
  __component: 'blocks.competitor-comparison';
  sectionTitle?: string;
  competitors: CompetitorCard[];
  airsaasAdvantage?: string;
}

export interface TestimonialCard {
  quote: string;
  authorName: string;
  authorTitle?: string;
  companyName?: string;
  companySize?: string;
  avatar?: StrapiImage;
  companyLogo?: StrapiImage;
}

export interface TestimonialBlock {
  __component: 'blocks.testimonial-section';
  sectionTitle?: string;
  testimonials: TestimonialCard[];
}

export interface LogoCloudBlock {
  __component: 'blocks.logo-cloud';
  title?: string;
  logos: StrapiImage[];
}

export interface MetricItem {
  value: string;
  label: string;
  icon?: StrapiImage;
}

export interface MetricsBlock {
  __component: 'blocks.metrics-section';
  metrics: MetricItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQBlock {
  __component: 'blocks.faq-section';
  title?: string;
  items: FAQItem[];
}

export interface CTASectionBlock {
  __component: 'blocks.cta-section';
  title: string;
  description?: string;
  primaryCta?: CTAButton;
  secondaryCta?: CTAButton;
  backgroundVariant: 'light' | 'dark' | 'gradient';
}

export interface RichTextBlock {
  __component: 'blocks.rich-text-section';
  content: string;
}

export interface SolutionCard {
  title: string;
  description: string;
  icon?: StrapiImage;
  link?: { label: string; url: string; isExternal: boolean };
}

export interface SolutionCardsBlock {
  __component: 'blocks.solution-cards';
  sectionTitle?: string;
  cards: SolutionCard[];
}

export interface VideoEmbedBlock {
  __component: 'blocks.video-embed';
  title?: string;
  videoUrl: string;
  thumbnail?: StrapiImage;
}

export type DynamicZoneBlock =
  | HeroBlock
  | FeatureBlock
  | PainPointsBlock
  | BeforeAfterBlock
  | CompetitorComparisonBlock
  | TestimonialBlock
  | LogoCloudBlock
  | MetricsBlock
  | FAQBlock
  | CTASectionBlock
  | RichTextBlock
  | SolutionCardsBlock
  | VideoEmbedBlock;

export interface BlogPost {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featuredImage?: StrapiImage;
  category?: BlogCategory;
  tags?: Tag[];
  author?: string;
  readingTime?: number;
  seo?: SEOMetadata;
  publishedAt?: string;
}

export interface BlogCategory {
  name: string;
  slug: string;
  description?: string;
}

export interface Tag {
  name: string;
  slug: string;
}

export interface PillarPage {
  title: string;
  slug: string;
  excerpt?: string;
  body: DynamicZoneBlock[];
  featuredImage?: StrapiImage;
  category?: BlogCategory;
  seo?: SEOMetadata;
}

export interface ProductPage {
  title: string;
  slug: string;
  featureKey: string;
  body: DynamicZoneBlock[];
  seo?: SEOMetadata;
}

export interface ComparisonPage {
  title: string;
  slug: string;
  competitorName: string;
  competitorLogo?: StrapiImage;
  body: DynamicZoneBlock[];
  seo?: SEOMetadata;
}

export interface Homepage {
  body: DynamicZoneBlock[];
  seo?: SEOMetadata;
}

export interface GlobalConfig {
  siteName: string;
  siteDescription?: string;
  defaultOgImage?: StrapiImage;
  hubspotPortalId?: string;
  hubspotFormId?: string;
  headerNavigation?: Array<{ label: string; url: string; isExternal: boolean }>;
  socialLinks?: Record<string, string>;
}
