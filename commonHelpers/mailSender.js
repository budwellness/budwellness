const nodemailer = require("nodemailer");
const keys = require("../config/keys");
const getConfigs = require("../config/getConfigs");

module.exports = async (subscriberMail, letterSubject, letterHtml, res) => {
  const configs = await getConfigs();

  //authorization for sending email
  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    auth: {
      user: "budwellnessproject@outlook.com",
      pass: "Qazwsx#123BUDWELLNESS",
    },
    tls: {
      ciphers: "SSLv3",
    },
    // service: "outlook",
    // service:
    //   process.env.NODE_ENV === "production"
    //     ? configs.production.email.mailService
    //     : configs.development.email.mailService,
    // auth: {
    //   user: process.env.NODE_ENV === "production" ? configs.production.email.mailUser : configs.development.email.mailUser,
    //   pass: process.env.NODE_ENV === "production" ? configs.production.email.mailPassword : configs.development.email.mailPassword,
    // },
  });

  const mailOptions = {
    // from: process.env.NODE_ENV === "production" ? configs.production.email.mailUser : configs.development.email.mailUser,
    from: "budwellnessproject@outlook.com",
    to: subscriberMail,
    subject: letterSubject,
    html: letterHtml,
  };

  const result = await transporter.sendMail(mailOptions);

  return result;
};
