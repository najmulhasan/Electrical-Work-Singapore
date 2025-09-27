# Complete Notification Setup Guide

## Overview
Your contact form now supports sending notifications via:
1. **Email** - Direct email to your business email
2. **WhatsApp** - WhatsApp Business API messages
3. **SMS** - Text messages via Twilio

## Quick Setup Options

### Option 1: Email Only (Easiest)
If you just want email notifications, set up Gmail SMTP:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Create `.env.local` file** in your project root:
```env
EMAIL_USER=askengineeringptetld@gmail.com
EMAIL_PASS=your-16-character-app-password
```

### Option 2: WhatsApp Integration
For WhatsApp Business API:

1. **Get WhatsApp Business API**:
   - Go to [Facebook Developers](https://developers.facebook.com/)
   - Create a WhatsApp Business app
   - Get your access token and phone number ID

2. **Add to `.env.local`**:
```env
WHATSAPP_ACCESS_TOKEN=your-whatsapp-access-token
WHATSAPP_PHONE_NUMBER_ID=your-phone-number-id
BUSINESS_PHONE_NUMBER=+6586439469
```

### Option 3: SMS Integration
For SMS via Twilio:

1. **Sign up for Twilio**:
   - Go to [Twilio](https://www.twilio.com/)
   - Get your Account SID, Auth Token, and phone number

2. **Add to `.env.local`**:
```env
TWILIO_ACCOUNT_SID=your-twilio-account-sid
TWILIO_AUTH_TOKEN=your-twilio-auth-token
TWILIO_FROM_NUMBER=your-twilio-phone-number
```

## Complete Environment File
Create `.env.local` in your project root with all services:

```env
# Email Configuration (Gmail SMTP)
EMAIL_USER=askengineeringptetld@gmail.com
EMAIL_PASS=your-16-character-app-password

# WhatsApp Business API
WHATSAPP_ACCESS_TOKEN=your-whatsapp-access-token
WHATSAPP_PHONE_NUMBER_ID=your-phone-number-id

# SMS Configuration (Twilio)
TWILIO_ACCOUNT_SID=your-twilio-account-sid
TWILIO_AUTH_TOKEN=your-twilio-auth-token
TWILIO_FROM_NUMBER=your-twilio-phone-number

# Business Information
BUSINESS_PHONE_NUMBER=+6586439469
```

## Step-by-Step Setup Instructions

### 1. Gmail SMTP Setup (Recommended for Email)

1. **Enable 2-Factor Authentication**:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Turn on 2-Step Verification

2. **Generate App Password**:
   - In Security settings, find "App passwords"
   - Select "Mail" and generate password
   - Copy the 16-character password

3. **Update Environment Variables**:
   ```env
   EMAIL_USER=askengineeringptetld@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

### 2. WhatsApp Business API Setup

1. **Create Facebook Developer Account**:
   - Go to [Facebook Developers](https://developers.facebook.com/)
   - Create a new app → Business → WhatsApp

2. **Get Credentials**:
   - In your app dashboard, go to WhatsApp → API Setup
   - Copy your Access Token and Phone Number ID

3. **Update Environment Variables**:
   ```env
   WHATSAPP_ACCESS_TOKEN=your-access-token
   WHATSAPP_PHONE_NUMBER_ID=your-phone-number-id
   ```

### 3. Twilio SMS Setup

1. **Sign up for Twilio**:
   - Go to [Twilio Console](https://console.twilio.com/)
   - Get your Account SID and Auth Token from the dashboard

2. **Get Phone Number**:
   - Buy a phone number in Twilio Console
   - Copy the phone number

3. **Update Environment Variables**:
   ```env
   TWILIO_ACCOUNT_SID=your-account-sid
   TWILIO_AUTH_TOKEN=your-auth-token
   TWILIO_FROM_NUMBER=your-twilio-number
   ```

## Testing Your Setup

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Fill out the contact form** on your website

3. **Check the console** for notification results:
   - Open browser developer tools
   - Look for "Notification results" in the console

4. **Verify notifications**:
   - Check your email inbox
   - Check your WhatsApp messages
   - Check your SMS messages

## Troubleshooting

### Email Issues
- Make sure 2FA is enabled on Gmail
- Use App Password, not your regular password
- Check spam folder

### WhatsApp Issues
- Verify your access token is correct
- Make sure your phone number ID is correct
- Check Facebook Developer Console for errors

### SMS Issues
- Verify Twilio credentials
- Make sure you have sufficient Twilio credits
- Check Twilio Console for delivery status

## Fallback Options

If API integrations fail, the system includes:

1. **WhatsApp Web Link**: Generates a direct WhatsApp link with the form data
2. **Console Logging**: All form submissions are logged to the server console
3. **Graceful Degradation**: Form still works even if notifications fail

## Cost Considerations

- **Gmail SMTP**: Free (up to 500 emails/day)
- **WhatsApp Business API**: Free tier available, then pay-per-message
- **Twilio SMS**: Pay-per-message (very affordable)

## Security Notes

- Never commit `.env.local` to version control
- Use App Passwords instead of regular passwords
- Regularly rotate your API keys
- Monitor your usage to avoid unexpected charges

## Support

If you need help with any of these setups, the notification service is designed to work even if some services fail. The form will still submit successfully and log all attempts.
