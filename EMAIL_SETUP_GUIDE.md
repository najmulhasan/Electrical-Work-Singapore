# Email Setup Guide for Contact Form

## Current Status
The contact form is currently set up with EmailJS but using placeholder values. To make it actually send emails, you need to complete the EmailJS setup.

## Step-by-Step Setup Instructions

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Set Up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. **Copy the Service ID** (you'll need this later)

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Body:**
```
Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Type: {{service_type}}
Urgency: {{urgency}}

Message:
{{message}}

---
This message was sent from your PowerTech Electrical website contact form.
```

4. **Copy the Template ID** (you'll need this later)

### 4. Get Your Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your "Public Key" in the API Keys section
3. **Copy the Public Key** (you'll need this later)

### 5. Update Your Code
1. Open `src/app/contact/page.tsx`
2. Find these lines (around line 85-87):
```javascript
const serviceId = 'service_placeholder';
const templateId = 'template_placeholder';
const publicKey = 'public_key_placeholder';
```

3. Replace the placeholder values with your actual values:
```javascript
const serviceId = 'your_actual_service_id';
const templateId = 'your_actual_template_id';
const publicKey = 'your_actual_public_key';
```

4. Uncomment the EmailJS code (lines 92-104) and comment out the simulation code (line 107)

### 6. Test the Form
1. Save your changes
2. Restart your development server
3. Go to your contact page
4. Fill out and submit the form
5. Check your email for the form submission

## Alternative: Environment Variables (Recommended)
For better security, you can use environment variables:

1. Create a `.env.local` file in your project root
2. Add these lines:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Update the code to use environment variables:
```javascript
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
```

## Troubleshooting
- Make sure your email service is properly connected
- Check that your template variables match the ones in the code
- Verify your public key is correct
- Check the browser console for any error messages

## Free Tier Limits
EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates

This should be sufficient for most small business websites.

