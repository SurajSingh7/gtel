
import nodemailer from 'nodemailer';
import connectDB from '@/config/db';
import Contact from '@/models/contact_us';

export async function POST(req) {
  try {
    // Connect to the MongoDB database
    await connectDB();

    // Parse the request body
    const body = await req.json();
    const { name, email, mobile, type, subject, message } = body;

    // Validate that all fields are provided
    if (!name || !email || !mobile || !type || !subject || !message) {
      return new Response(
        JSON.stringify({ message: 'All fields are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Save form data to the database
    const newSubmission = new Contact({
      name,
      email,
      mobile,
      type,
      subject,
      message,
    });
    await newSubmission.save(); // Save to MongoDB

    // Configure the email transporter using Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com', 
      port: 587, // Secure port for Office365
      secure: false,
      auth: {
        user: 'info@gtel.in', 
        pass: 'Z(415122455190at', 
      },
    });

    // const companyEmail = ["sales@gtel.in", "support@gtel.in"];
    let recipientEmail;
    
      
    if (type === "Technical Support") {
      recipientEmail = ["support@gtel.in"]
    } else {
      recipientEmail = ["sales@gtel.in"]
    }

    const adminMailOptions = {
      from: '"Gigantic" <info@gtel.in>',
      to: recipientEmail, 
      subject: `New Contact: ${name} - ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Type: ${type}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };
    
    // Send admin notification email
    await transporter.sendMail(adminMailOptions);

    // Email content for user
    const userMailOptions = {
      from: '"Gigantic" <info@gtel.in>',
      to: email, // User's email
      subject: 'Thank you for contacting us!',
      text: `
        Hi ${name},
        
        Thank you for reaching out to us. We have received your inquiry:
        
        Subject: ${subject}
        Message: ${message}
        
        We will get back to you shortly.
        
        Best regards,
        Gigantic Team
      `,
      html: `
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thank you for reaching out to us. We have received your inquiry:</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p>We will get back to you shortly.</p>
        <p>Best regards,<br/>Gigantic Team</p>
      `,
    };

    // Send acknowledgment email to user
    await transporter.sendMail(userMailOptions);

    // Respond with success
    return new Response(
      JSON.stringify({ message: 'Emails sent successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing the request:', error);

    return new Response(
      JSON.stringify({ message: 'Failed to send email or save data.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
