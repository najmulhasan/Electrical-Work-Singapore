import nodemailer from 'nodemailer';
import axios from 'axios';

// Email configuration
const emailConfig = {
  // Gmail SMTP configuration (you can use other providers too)
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password', // Use App Password for Gmail
  },
};

// WhatsApp Business API configuration
const whatsappConfig = {
  accessToken: process.env.WHATSAPP_ACCESS_TOKEN || 'your-whatsapp-token',
  phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID || 'your-phone-number-id',
  toPhoneNumber: process.env.BUSINESS_PHONE_NUMBER || '+6586439469', // Your business phone
};

// SMS configuration (using Twilio as example)
const smsConfig = {
  accountSid: process.env.TWILIO_ACCOUNT_SID || 'your-twilio-sid',
  authToken: process.env.TWILIO_AUTH_TOKEN || 'your-twilio-token',
  fromNumber: process.env.TWILIO_FROM_NUMBER || 'your-twilio-number',
  toNumber: process.env.BUSINESS_PHONE_NUMBER || '+6586439469', // Your business phone
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  urgency: string;
}

export class NotificationService {
  // Send email notification
  static async sendEmail(formData: FormData): Promise<boolean> {
    try {
      const transporter = nodemailer.createTransport(emailConfig);

      const emailContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Service:</strong> ${formData.service || 'Not specified'}</p>
        <p><strong>Urgency:</strong> ${formData.urgency}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
        <hr>
        <p><em>This message was sent from your PowerTech Electrical website contact form.</em></p>
        <p><em>Timestamp: ${new Date().toLocaleString()}</em></p>
      `;

      const mailOptions = {
        from: emailConfig.auth.user,
        to: 'askengineeringptetld@gmail.com', // Your business email
        subject: `New Contact Form Submission from ${formData.name}`,
        html: emailContent,
        replyTo: formData.email,
      };

      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }

  // Send WhatsApp message
  static async sendWhatsApp(formData: FormData): Promise<boolean> {
    try {
      const message = `🔌 *New Contact Form Submission*

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

      const response = await axios.post(
        `https://graph.facebook.com/v18.0/${whatsappConfig.phoneNumberId}/messages`,
        {
          messaging_product: 'whatsapp',
          to: whatsappConfig.toPhoneNumber.replace('+', ''),
          type: 'text',
          text: {
            body: message,
          },
        },
        {
          headers: {
            'Authorization': `Bearer ${whatsappConfig.accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('WhatsApp message sent successfully:', response.data);
      return true;
    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
      return false;
    }
  }

  // Send SMS notification
  static async sendSMS(formData: FormData): Promise<boolean> {
    try {
      const message = `New contact form submission from ${formData.name} (${formData.phone}). Service: ${formData.service || 'Not specified'}. Urgency: ${formData.urgency}`;

      const response = await axios.post(
        `https://api.twilio.com/2010-04-01/Accounts/${smsConfig.accountSid}/Messages.json`,
        new URLSearchParams({
          From: smsConfig.fromNumber,
          To: smsConfig.toNumber,
          Body: message,
        }),
        {
          auth: {
            username: smsConfig.accountSid,
            password: smsConfig.authToken,
          },
        }
      );

      console.log('SMS sent successfully:', response.data);
      return true;
    } catch (error) {
      console.error('Error sending SMS:', error);
      return false;
    }
  }

  // Send all notifications
  static async sendAllNotifications(formData: FormData): Promise<{
    email: boolean;
    whatsapp: boolean;
    sms: boolean;
  }> {
    const results = {
      email: false,
      whatsapp: false,
      sms: false,
    };

    // Send all notifications in parallel
    const [emailResult, whatsappResult, smsResult] = await Promise.allSettled([
      this.sendEmail(formData),
      this.sendWhatsApp(formData),
      this.sendSMS(formData),
    ]);

    results.email = emailResult.status === 'fulfilled' && emailResult.value;
    results.whatsapp = whatsappResult.status === 'fulfilled' && whatsappResult.value;
    results.sms = smsResult.status === 'fulfilled' && smsResult.value;

    return results;
  }

  // Simple WhatsApp web link (fallback method)
  static generateWhatsAppLink(formData: FormData): string {
    const message = `🔌 New Contact Form Submission

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
🔧 Service: ${formData.service || 'Not specified'}
⚡ Urgency: ${formData.urgency}

💬 Message: ${formData.message}

⏰ Time: ${new Date().toLocaleString()}`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/6586439469?text=${encodedMessage}`;
  }
}
