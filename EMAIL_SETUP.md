# Email Setup Guide

This guide explains how to set up the contact form email functionality using your SMTP server.

## SMTP Configuration

Your email server configuration:

- **Host**: `smtp.padin.my.id`
- **Port**: `465` (SSL)
- **Username**: `admin@padin.my.id`
- **Authentication**: Required

## Setup Steps

### 1. Environment Variables

Create a `.env` file in the root directory with:

```bash
EMAIL_PASSWORD=your_actual_email_password
PING_MESSAGE=ping
```

**Important**: Replace `your_actual_email_password` with the actual password for `admin@padin.my.id`

### 2. Install Dependencies

The required packages are already installed:

- `nodemailer` - For sending emails
- `@types/nodemailer` - TypeScript types

### 3. Email Service Features

The email service includes:

- ✅ **SMTP Authentication** with your server
- ✅ **HTML Email Templates** with professional styling
- ✅ **Form Validation** (name, email, message required)
- ✅ **Error Handling** and user feedback
- ✅ **Security** - Email password stored in environment variables

### 4. API Endpoint

- **URL**: `POST /api/contact`
- **Body**: JSON with `name`, `email`, and `message`
- **Response**: Success/error status with messages

### 5. Frontend Integration

The Contact component now:

- ✅ Sends real emails instead of mock submissions
- ✅ Shows success/error messages
- ✅ Handles network errors gracefully
- ✅ Resets form on successful submission

## Email Template

Emails are sent with:

- **From**: `admin@padin.my.id`
- **To**: `admin@padin.my.id` (configurable)
- **Subject**: "New Contact Form Message from [Name]"
- **Content**: Professional HTML template with contact details

## Testing

1. **Start the server**: `npm run dev` or `npm run build && npm start`
2. **Fill out contact form** on your website
3. **Check email** at `admin@padin.my.id`
4. **Verify** email content and formatting

## Security Notes

- ✅ Email password is stored in environment variables
- ✅ SMTP uses SSL (port 465)
- ✅ Input validation prevents injection attacks
- ✅ Error messages don't expose sensitive information

## Troubleshooting

### Common Issues

1. **"Failed to send message"**
   - Check `EMAIL_PASSWORD` in `.env` file
   - Verify SMTP server is accessible
   - Check firewall/network settings

2. **"Email configuration verification failed"**
   - Verify SMTP credentials
   - Check port 465 is open
   - Ensure SSL is enabled

3. **Form not submitting**
   - Check browser console for errors
   - Verify API endpoint is accessible
   - Check server logs

### Debug Mode

Enable debug logging by adding to `.env`:

```bash
DEBUG=nodemailer:*
```

## Customization

You can modify:

- **Email template** in `server/services/emailService.ts`
- **Recipient email** (currently set to `admin@padin.my.id`)
- **Email subject** and formatting
- **Validation rules** in `server/routes/contact.ts`

## Support

If you encounter issues:

1. Check server logs for error messages
2. Verify SMTP configuration
3. Test with a simple email client first
4. Ensure environment variables are set correctly
