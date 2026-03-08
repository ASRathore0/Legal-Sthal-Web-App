
export interface InquiryData {
  name: string;
  email: string;
  phone: string;
  message: string;
  serviceType: string;
}

export enum ServiceType {
  SOLE_PROPRIETORSHIP = 'Sole Proprietorship',
  PARTNERSHIP = 'Partnership Firm',
  STARTUP_INDIA = 'Startup India',
  PROTECT_BUSINESS = 'Protect Business',
  MANAGE_BUSINESS = 'Manage Business',
  GROW_BUSINESS = 'Grow Business',
  GENERAL = 'General Inquiry'
}

export interface NavItem {
  label: string;
  link: string; // Changed from path to link to match API
  subNav?: NavItem[]; // Optional nested sub-navigation items
}

// CMS Types

export interface GlobalContent {
  header_logo: string;
  header_nav: NavItem[];
  hero_title: string;
  hero_subtitle?: string; // Add if API returns it
  hero_image?: string; // Add if API returns it
  why_choose_image?: string; // Add if API returns it
  our_services: ServiceSectionItem[];
  why_choose_us: WhyChooseUsItem[];
  trusted_partners: PartnerItem[];
  testimonials: TestimonialItem[];
  footer_about: string;
  footer_links?: NavItem[]; // Assuming it might return footer links
  footer_email?: string;
  footer_phone?: string;
  footer_address?: string;
  contact_info?: { // Kept for backward compatibility if needed, but API uses flat fields
      email: string;
      phone: string;
      address: string;
  }
}

export interface ServiceSectionItem {
  title: string;
  description: string;
  icon?: string; // optional if API returns icon name or url
  link?: string;
}

export interface WhyChooseUsItem {
  point: string;
  title?: string;
  description?: string;
  icon?: string;
}

export interface PartnerItem {
  name: string;
  logo?: string;
}

export interface TestimonialItem {
  author: string;
  quote: string;
  role?: string;
  company?: string;
  image?: string; // matched with API response
}

export interface CustomPageListItem {
  id: number;
  title: string;
  slug: string;
  status: number;
}

export interface CustomPageData {
  title: string;
  slug: string;
  hero_title: string;
  hero_price?: string;
  also_get?: string[];
  how_it_works?: string[];
  benefits?: string[];
  requirements?: string[];
  documents?: string[];
  what_you_get?: string[];
  form_title?: string;
  description?: string; // In case there's a body text
}

