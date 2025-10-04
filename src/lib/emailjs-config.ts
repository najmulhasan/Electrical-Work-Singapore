// EmailJS Configuration
import emailjs from '@emailjs/browser';

export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key',
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(emailjsConfig.publicKey);
};

// Your business email
export const BUSINESS_EMAIL = 'askengineeringpteltd@gmail.com';

// Email template parameters
export type EmailParams = {
  from_name: string;
  from_email: string;
  phone: string;
  service: string;
  message: string;
  urgency: string;
  to_name: string;
  [key: string]: string; // Add index signature
};

// Send email using EmailJS
export const sendEmail = async (params: EmailParams) => {
  try {
    const response = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      params
    );
    return response;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};
