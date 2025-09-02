import * as nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Email configuration - Custom Domain SMTP
const emailConfig = {
  host: 'smtp.padin.my.id',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'admin@padin.my.id',
    pass: process.env.EMAIL_PASSWORD || '',
  },
};

async function testEmailConfig() {
  try {
    console.log('Testing Custom Domain SMTP configuration...');
    console.log('Host:', emailConfig.host);
    console.log('Port:', emailConfig.port);
    console.log('User:', emailConfig.auth.user);
    console.log('Password set:', !!emailConfig.auth.pass);
    console.log('Password length:', emailConfig.auth.pass.length);
    
    // Create transporter
    const transporter = nodemailer.createTransport(emailConfig);
    
    // Verify configuration
    console.log('\nVerifying Custom Domain SMTP configuration...');
    await transporter.verify();
    console.log('✅ Custom Domain SMTP configuration is valid!');
    
    // Test email
    console.log('\nSending test email...');
    const mailOptions = {
      from: 'admin@padin.my.id',
      to: 'admin@padin.my.id',
      subject: 'Test Email from Portfolio Contact Form',
      text: 'This is a test email to verify the Custom Domain SMTP configuration is working correctly.',
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2 style="color: #3A0764;">Test Email</h2>
          <p>This is a test email to verify the Custom Domain SMTP configuration is working correctly.</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Status:</strong> ✅ Custom Domain SMTP configuration verified and test email sent</p>
        </div>
      `,
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    
  } catch (error) {
    console.error('❌ Custom Domain SMTP configuration test failed:');
    console.error(error.message);
    
    if (error.code === 'EAUTH') {
      console.error('\n💡 Authentication failed. Please check:');
      console.error('1. EMAIL_PASSWORD is set in .env file');
      console.error('2. Password is correct for admin@padin.my.id');
      console.error('3. SMTP credentials are valid for smtp.padin.my.id');
    } else if (error.code === 'ECONNECTION') {
      console.error('\n💡 Connection failed. Please check:');
      console.error('1. SMTP server smtp.padin.my.id is accessible');
      console.error('2. Port 465 is open');
      console.error('3. SSL is enabled');
    } else if (error.code === 'ETIMEDOUT') {
      console.error('\n💡 Connection timeout. Please check:');
      console.error('1. Your internet connection');
      console.error('2. Firewall settings');
      console.error('3. Try again in a few minutes');
    }
  }
}

// Run the test
testEmailConfig(); 