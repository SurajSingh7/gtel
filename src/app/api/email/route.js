import nodemailer from 'nodemailer';
import connectDB from '@/config/db';
import NewConnection from '@/models/newconnections';

export async function POST(req) {
  try {
    console.log('reached here');
    // Connect to the MongoDB database
    await connectDB();

    // Get the form data from the request body
    const body = await req.json();
    const { name, email, mobile, city, serviceType, supportType } = body;
 
    // Validate that all fields are present
    if (!name || !email || !mobile || !city || !serviceType || !supportType) {
      return new Response(
        JSON.stringify({ message: 'All fields are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

   

    // Save form data to the database
    const newSubmission = new NewConnection({
      name,
      email,
      mobile,
      city,
      serviceType,
      supportType,
    });
    await newSubmission.save("gtel"); 

    

    sendWhatsAppMessage(name, email,mobile,city,serviceType,supportType);

    // Set up email transport using Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587, // Secure port for Office365
      secure: false,
      auth: {
        user: 'info@gtel.in',
        pass: 'Z(415122455190at',
      },
    });

   const type = ["Technical Support", "Billing & Recharge"];
    let recipientEmail;
    
    // Correctly checking if supportType matches any value in `type`

    if (type.includes(supportType)) {     
      recipientEmail = ["support@gtel.in"]
       } else {
         recipientEmail = ["sales@gtel.in"]
       }


    // Send admin notification email
    await transporter.sendMail({
      from: '"Gigantic" <info@gtel.in>',
      to: recipientEmail,
      subject: `Message from ${name} ${serviceType}`,
      text: `You received a message from ${name} (${email}):\n\nMobile: ${mobile}\nCity: ${city}\nService Type: ${serviceType}\nSupport Type: ${supportType}`,
      html: `
        <p>You received a message from <strong>${name}</strong> (<a href="mailto:${email}">${email}</a>):</p>
        <p>Mobile: ${mobile}</p>
        <p>City: ${city}</p>
        <p>Service Type: ${serviceType}</p>
        <p>Support Type: ${supportType}</p>
      `,
    });

    // Send a thank-you email to the user
    await transporter.sendMail({
      from: '"Gigantic" <info@gtel.in>',
      to: email,
      subject: 'Thank you for connecting with us!',
      text: `Hi ${name},\n\nThank you for reaching out to us! We have received your inquiry and will get back to you soon.\n\nBest regards,\nGigantic Team`,
      html: `
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thank you for reaching out to us! We have received your inquiry and will get back to you soon.</p>
        <p>Best regards,<br/>Gigantic Team</p>
      `,
    });

   
    // Send a WhatsApp message
      async function sendWhatsAppMessage(name, email, mobile, city, serviceType, supportType) {
      try {
        // Ensure only "New Connection" messages are sent
        if (supportType.toLowerCase() !== "new connection") {
          console.log("WhatsApp message not sent. Support Type is not 'new connection'.");
          return;
        }
    
        // Message content as an object (correct format)
        const messageData = {
          name: name,
          email: email,
          mobile: mobile,
          city: city,
          serviceType: serviceType,
          supportType: supportType
        };
    
        // API URL & Credentials
        const whatsappApiUrl = "http://10.253.71.78:8000/api/external/send-group-message";
        const apiToken = "5Z3PLliyT5y02PL";
        const groupId = "918826997461-1561020347@g.us";
    
        // API Request
        const whatsappResponse = await fetch(whatsappApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            groupId,
            apiToken,
            data: messageData, // Send data as an object
            source: "gtel-website",
            type: "gtel-website-inquiry"
          }),
        });
    
        // Error Handling
        if (!whatsappResponse.ok) {
          const errorDetails = await whatsappResponse.text();
          console.error("WhatsApp API Error:", errorDetails);
          throw new Error(`Failed to send WhatsApp message: ${errorDetails}`);
        }
    
        console.log("WhatsApp Message Sent Successfully");
      } catch (error) {
        console.error("Error sending WhatsApp message:", error.message);
      }
    }      
  


    return new Response(
      JSON.stringify({ message: 'Emails, group message, and individual WhatsApp message sent successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error(`Error occurred : ${error.message}`);

    return new Response(
      JSON.stringify({ message: 'Failed to send email or WhatsApp messages.' }),
      { status: 500, error : `error : ${error}`, headers: { 'Content-Type': 'application/json' } }
    );
  }
}