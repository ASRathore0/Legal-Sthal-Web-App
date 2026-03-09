export interface FormSubmissionData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  serviceType: string;
  title?: string;
  city?: string;
  whatsapp?: boolean;
  submittedAt: string;
  source: 'HeroInquiry' | 'GeneralInquiry' | 'ContactForm';
}

// Ensure the base URL is provided
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CRM_API_URL = BASE_URL ? `${BASE_URL.replace(/\/+$/, '')}/api/leads` : '';

// You need to replace this URL with your deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbykCHtqs_z6Bu20F6_aup68jXN5Lihby3EMWw_J0K-FtpwwadFzzKFS5liQYx9dVB6W/exec';

export const submitToCRM = async (data: FormSubmissionData): Promise<boolean> => {

  try {
    // Construct the payload exactly as required by the CRM
    // We need to ensure 'name' doesn't contain the title, as 'title' is sent separately
    let cleanName = data.name;
    if (data.title && data.name.startsWith(data.title)) {
        cleanName = data.name.substring(data.title.length).trim();
    }

    const payload = {
        title: data.title || "Mr.",
        name: cleanName,
        email: data.email,
        phone: data.phone,
        serviceType: data.serviceType,
        message: data.message,
        city: data.city || 'Gurugram',
        source: "Website" // Using fixed source as per API requirement example
    };

    const response = await fetch(CRM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return true;
    } else {
      console.error('CRM submission failed:', await response.text());
      return false;
    }
  } catch (error) {
    console.error('Error submitting to CRM:', error);
    return false;
  }
};

export const submitToGoogleSheet = async (data: FormSubmissionData): Promise<boolean> => {
  // Try CRM first, fall back to Google Sheet or localStorage if needed
  // For now, we'll run both or just Google Sheet if CRM isn't ready
  
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('YOUR_GOOGLE_SCRIPT_WEB_APP_URL_HERE')) {
    console.warn('Google Script URL is not configured. Saving to localStorage instead.');
    saveToLocalStorage(data);
    return true; // Pretend it worked so the UI shows success
  }

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain',
      },
    });

    // With no-cors, we can't check response.ok or response.json().
    // The request is opaque. We assume it worked.
    return true;
  } catch (error) {
    console.error('Error submitting form:', error);
    // Fallback to local storage if network fails
    saveToLocalStorage(data);
    return false;
  }
};

const saveToLocalStorage = (data: FormSubmissionData) => {
    try {
        const existing = JSON.parse(localStorage.getItem('inquiries') || '[]');
        existing.push(data);
        localStorage.setItem('inquiries', JSON.stringify(existing));
    } catch (err) {
        console.error('Failed to save to localStorage', err);
    }
};
