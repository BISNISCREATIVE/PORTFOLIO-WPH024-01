import "dotenv/config";
import * as nodemailer from 'nodemailer';

// Email configuration - Custom Domain SMTP
const emailConfig = {
  host: 'smtp.padin.my.id',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'admin@padin.my.id',
    pass: process.env.EMAIL_PASSWORD || '', // Set this in environment variables
  },
};

// Log configuration for debugging
console.log('Email configuration loaded:');
console.log('Host:', emailConfig.host);
console.log('Port:', emailConfig.port);
console.log('User:', emailConfig.auth.user);
console.log('Password set:', !!emailConfig.auth.pass);
console.log('Password length:', emailConfig.auth.pass.length);

// Create transporter
const transporter = nodemailer.createTransport(emailConfig);

// Email interface
export interface ContactEmail {
  name: string;
  email: string;
  message: string;
}

// Send contact form email
export async function sendContactEmail(contactData: ContactEmail): Promise<boolean> {
  try {
    const mailOptions = {
      from: 'admin@padin.my.id',
      to: 'admin@padin.my.id', // You can change this to forward to another email
      subject: `New Contact Form Message from ${contactData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3A0764;">New Contact Form Message</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #3A0764;">
              ${contactData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <div style="text-align: center; color: #666; font-size: 12px;">
            <p>This message was sent from your portfolio contact form.</p>
            <p>Time: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Message

Name: ${contactData.name}
Email: ${contactData.email}
Message: ${contactData.message}

Time: ${new Date().toLocaleString()}
      `,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

// Verify email configuration
export async function verifyEmailConfig(): Promise<boolean> {
  try {
    await transporter.verify();
    return true;
  } catch (error) {
    console.error('Email configuration verification failed:', error);
    return false;
  }
} 