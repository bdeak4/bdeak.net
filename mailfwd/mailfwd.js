const nodemailer = require("nodemailer");
const emailValidator = require("email-validator");

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  if (!message.trim()) {
    return { statusCode: 400, body: "message-required" };
  }

  if (!emailValidator.validate(email)) {
    return { statusCode: 400, body: "email-not-valid" };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    replyTo: email,
    subject: `[mailfwd] New message`,
    text: `Name: ${name}
Email: ${email}

Message:
${message}`,
  });

  return { statusCode: 200, body: "mail-sent" };
};
