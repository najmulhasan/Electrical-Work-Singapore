import { NextRequest, NextResponse } from 'next/server';
import { NotificationService } from '@/lib/notification-service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, urgency } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const formData = {
      name,
      email,
      phone,
      service,
      message,
      urgency
    };

    // Log the form submission
    console.log('Contact form submission:', {
      ...formData,
      timestamp: new Date().toISOString()
    });

    // Send notifications
    const notificationResults = await NotificationService.sendAllNotifications(formData);
    
    // Log notification results
    console.log('Notification results:', notificationResults);

    // Check if at least one notification was sent successfully
    const hasSuccessfulNotification = Object.values(notificationResults).some(result => result);

    if (hasSuccessfulNotification) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Form submitted successfully. We will get back to you within 24 hours.',
          notifications: notificationResults
        },
        { status: 200 }
      );
    } else {
      // If all notifications failed, still return success but log the issue
      console.error('All notifications failed');
      return NextResponse.json(
        { 
          success: true, 
          message: 'Form submitted successfully. We will get back to you within 24 hours.',
          notifications: notificationResults,
          warning: 'Some notifications may not have been sent'
        },
        { status: 200 }
      );
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
