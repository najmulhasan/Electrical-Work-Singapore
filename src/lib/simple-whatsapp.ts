// Simple WhatsApp integration without Business API
// This creates a direct WhatsApp link that opens WhatsApp Web/App

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  urgency: string;
}

export class SimpleWhatsApp {
  // Generate WhatsApp link with form data
  static generateWhatsAppLink(formData: FormData, businessPhone: string = '+6586439469'): string {
    const message = this.formatMessage(formData);
    const encodedMessage = encodeURIComponent(message);
    const cleanPhone = businessPhone.replace(/\D/g, ''); // Remove non-digits
    
    return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
  }

  // Format the message for WhatsApp
  private static formatMessage(formData: FormData): string {
    return `🔌 *New Contact Form Submission*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
🔧 *Service:* ${formData.service || 'Not specified'}
⚡ *Urgency:* ${formData.urgency}

💬 *Message:*
${formData.message}

⏰ *Time:* ${new Date().toLocaleString()}

---
Ask Engineering & Pte Ltd Singapore`;
  }

  // Open WhatsApp in new tab/window
  static openWhatsApp(formData: FormData, businessPhone: string = '+6586439469'): void {
    const link = this.generateWhatsAppLink(formData, businessPhone);
    window.open(link, '_blank');
  }

  // Create a button that opens WhatsApp
  static createWhatsAppButton(formData: FormData, businessPhone: string = '+6586439469'): HTMLAnchorElement {
    const link = this.generateWhatsAppLink(formData, businessPhone);
    const button = document.createElement('a');
    button.href = link;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.textContent = 'Send via WhatsApp';
    button.className = 'whatsapp-button';
    return button;
  }
}

// Auto-send WhatsApp message after form submission
export function autoSendWhatsApp(formData: FormData): void {
  // Wait a moment for the success message to show
  setTimeout(() => {
    const shouldSend = confirm(
      'Form submitted successfully! Would you like to also send this information via WhatsApp for immediate attention?'
    );
    
    if (shouldSend) {
      SimpleWhatsApp.openWhatsApp(formData);
    }
  }, 2000);
}
