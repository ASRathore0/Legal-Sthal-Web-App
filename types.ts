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
  GENERAL = 'General Inquiry'
}

export interface NavItem {
  label: string;
  path: string;
}
