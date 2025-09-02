import { Request, Response } from 'express';
import { sendContactEmail, ContactEmail } from '../services/emailService';

export async function handleContact(req: Request, res: Response) {
  try {
    const { name, email, message }: ContactEmail = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required',
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
      });
    }

    // Send email
    const emailSent = await sendContactEmail({ name, email, message });

    if (emailSent) {
      res.status(200).json({
        success: true,
        message: 'Message sent successfully! I will get back to you soon.',
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to send message. Please try again later.',
      });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
    });
  }
} 