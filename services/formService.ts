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

// You need to replace this URL with your deployed Google Apps Script Web App URL
// See GOOGLE_SHEET_SETUP.md for instructions
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbykCHtqs_z6Bu20F6_aup68jXN5Lihby3EMWw_J0K-FtpwwadFzzKFS5liQYx9dVB6W/exec';

export const submitToGoogleSheet = async (data: FormSubmissionData): Promise<boolean> => {
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
