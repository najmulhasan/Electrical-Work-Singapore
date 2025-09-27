// Google Analytics 4 and Google Ads conversion tracking
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
  }
}

// Google Analytics 4 Configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

// Google Ads Conversion ID
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-XXXXXXXXXX';

// Facebook Pixel ID
export const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || 'XXXXXXXXXX';

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track conversions
export const trackConversion = (conversionId: string, conversionLabel: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
    });
  }
};

// Track contact form submission
export const trackContactFormSubmission = (formData: {
  name: string;
  email: string;
  service: string;
  urgency: string;
}) => {
  // Google Analytics event
  event({
    action: 'form_submit',
    category: 'Contact',
    label: `Service: ${formData.service}, Urgency: ${formData.urgency}`,
  });

  // Google Ads conversion
  trackConversion(GOOGLE_ADS_ID, 'contact_form_submission');

  // Facebook Pixel event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: 'Contact Form Submission',
      content_category: formData.service,
    });
  }
};

// Track phone call clicks
export const trackPhoneCall = (phoneNumber: string) => {
  event({
    action: 'phone_call',
    category: 'Contact',
    label: phoneNumber,
  });

  // Google Ads conversion for phone calls
  trackConversion(GOOGLE_ADS_ID, 'phone_call');
};

// Track WhatsApp clicks
export const trackWhatsAppClick = () => {
  event({
    action: 'whatsapp_click',
    category: 'Contact',
    label: 'WhatsApp Contact',
  });
};

// Track service page views
export const trackServiceView = (service: string) => {
  event({
    action: 'service_view',
    category: 'Services',
    label: service,
  });
};

// Track quote request
export const trackQuoteRequest = (service: string) => {
  event({
    action: 'quote_request',
    category: 'Lead Generation',
    label: service,
    value: 100, // Estimated lead value
  });

  // Google Ads conversion
  trackConversion(GOOGLE_ADS_ID, 'quote_request');
};

// Track emergency service request
export const trackEmergencyRequest = () => {
  event({
    action: 'emergency_request',
    category: 'Emergency',
    label: 'Emergency Service',
    value: 200, // Higher value for emergency services
  });

  // Google Ads conversion
  trackConversion(GOOGLE_ADS_ID, 'emergency_request');
};

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  event({
    action: 'social_click',
    category: 'Social Media',
    label: platform,
  });
};

// Track review clicks
export const trackReviewClick = (platform: string) => {
  event({
    action: 'review_click',
    category: 'Reviews',
    label: platform,
  });
};
