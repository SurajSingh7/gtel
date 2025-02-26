
import nodemailer from 'nodemailer';
import connectDB from '@/config/db';
import Plan from '@/models/plan';

export async function POST(req) {
  try {
    // Connect to the MongoDB database
    await connectDB();

    // Parse the request body
    const body = await req.json();
    const { name, email, mobile, city, message } = body;

    // Validate that all fields are provided
    if (!name || !email || !mobile || !city || !message) {
      return new Response(
        JSON.stringify({ message: 'All fields are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Save form data to the database
    const newSubmission = new Plan({
      name,
      email,
      mobile,
      city,
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
    const companyEmail = ["sales@gtel.in"]
    console.log(companyEmail)

    const adminMailOptions = {
      from: '"Gigantic" <info@gtel.in>',
     to: companyEmail.join(","),
      subject: `Plan Inquiry: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        City: ${city}
        Message: ${message}
      `,
      html: `
        <h3>Plan Inquiry Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send admin notification email
    await transporter.sendMail(adminMailOptions);

    // Email content for user
    const userMailOptions = {
      from: '"Gigantic" <info@gtel.in>',
      to: email, // User's email
    
      text: `
        Hi ${name},
        
        Thank you for reaching out to us. We have received your inquiry:
        
        
        Message: ${message}
        
        We will get back to you shortly.
        
        Best regards,
        Gigantic Team
      `,
      html: `
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thank you for reaching out to us. We have received your inquiry:</p>
        
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
