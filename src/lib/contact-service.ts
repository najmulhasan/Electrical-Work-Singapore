import { SimpleWhatsApp } from './simple-whatsapp';
import { initEmailJS, sendEmail } from './emailjs-config';

// Initialize EmailJS on the client side
if (typeof window !== 'undefined') {
  initEmailJS();
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  urgency: string;
}

export class ContactService {
  // Send form data via email using EmailJS
  static async sendViaEmail(formData: ContactFormData): Promise<boolean> {
    try {
      await sendEmail({
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service || 'Not specified',
        message: formData.message,
        urgency: formData.urgency,
        to_name: 'Ask Engineering & Pte Ltd',
      });
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }

  // Send form data via WhatsApp
  static async sendViaWhatsApp(formData: ContactFormData): Promise<boolean> {
    try {
      const whatsappLink = SimpleWhatsApp.generateWhatsAppLink({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        urgency: formData.urgency
      }, '+6586439469');

      // Open WhatsApp link in a new window
      if (typeof window !== 'undefined') {
        window.open(whatsappLink, '_blank');
      }
      return true;
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      return false;
    }
  }

  // Send form data through all available channels
  static async sendAll(formData: ContactFormData): Promise<{
    email: boolean;
    whatsapp: boolean;
  }> {
    const [emailResult, whatsappResult] = await Promise.all([
      this.sendViaEmail(formData),
      this.sendViaWhatsApp(formData),
    ]);

    return {
      email: emailResult,
      whatsapp: whatsappResult,
    };
  }
}