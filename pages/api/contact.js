// import nodemailer from "nodemailer";
// const dotenv = require('dotenv');
// const { google } = require("googleapis");
// const OAuth2 = google.auth.OAuth2;
// dotenv.config();


// const createTransporter = async () => {
//   const oauth2Client = new OAuth2(
//     process.env.GCLIENT_ID,
//     process.env.CLIENT_SECRET,
//     "https://developers.google.com/oauthplayground"
//   );

//   oauth2Client.setCredentials({
//     refresh_token: process.env.REFRESH_TOKEN
//   });

//   const accessToken = await new Promise((resolve, reject) => {
//     oauth2Client.getAccessToken((err, token) => {
//       if (err) {
//         reject();
//       }
//       resolve(token);
//     });
//   });

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       type: "OAuth2",
//       user: process.env.EMAIL,
//       accessToken,
//       clientId: process.env.GCLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       refreshToken: process.env.REFRESH_TOKEN
//     },
//     tls: {
//       rejectUnauthorized: false
//     }
//   });

//   return transporter;
// };

// const sendEmail = async (emailOptions) => {
//   let emailTransporter = await createTransporter();
//   await emailTransporter.sendMail(emailOptions);
// };




// export default async (req, res) => {
//   const { name, subject,email, message } = req.body;
//   try {
    
//     sendEmail({
//       subject: ` ${subject}`,
//       html: `<p>You have a contact form submission from  </strong>${name}</p> <strong>
//          <p><strong>Email: </strong> ${email}</p>
//           <p><strong>Message: </strong> ${message}</p>`,
//       to: "shivam@globalgovernanceinitiative.org, shatakshi@globalgovernanceinitiative.org",
//       from: process.env.EMAIL
//     });
//     return res.status(200).json("success");
//   } catch (error) {
//     return res.status(500).json({ error: error.message || error.toString() });
//   }
  
// };


import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);


async function sendEmail(req, res) {
  const { name, subject,email, message } = req.body;
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "shatakshi@globalgovernanceinitiative.org", // Your email where you'll receive emails
      from: "shivam@globalgovernanceinitiative.org", // your website email address here
      subject: `${subject}`,
      html: `<div>New Lead from Website. You've got a mail from <b>${name}</b></div>
             <br>
             <div>Email : <b>${email}</b></div>
             <br>
             <div>Message :</div>
             <br>
             <div>${message}</div>`,
    });
    
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;

