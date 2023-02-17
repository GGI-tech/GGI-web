import nodemailer from "nodemailer";
const dotenv = require('dotenv');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
dotenv.config();


const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject();
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      accessToken,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  return transporter;
};

const sendEmail = async (emailOptions) => {
  let emailTransporter = await createTransporter();
  await emailTransporter.sendMail(emailOptions);
};




export default async (req, res) => {
  const { name, subject,email, message } = req.body;

  // const transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: process.env.SMTP_USER,
  //     pass: process.env.SMTP_PASSWORD
  //   }
  // });

  try {
    // await transporter.sendMail({
    //   from: email,
    //   to: "shivam@globalgovernanceinitiative.org",
    //   subject: `Contact form submission from ${name}`,
    //   html: `<p>You have a contact form submission</p><br>
    //     <p><strong>Email: </strong> ${email}</p><br>
    //     <p><strong>Message: </strong> ${message}</p><br>
    //   `
    // });
    sendEmail({
      subject: ` ${subject}`,
      html: `<p>You have a contact form submission from  </strong>${name}</p> <strong>
         <p><strong>Email: </strong> ${email}</p>
          <p><strong>Message: </strong> ${message}</p>`,
      to: "shivambunge9898@gmail.com",
      from: process.env.EMAIL
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};


