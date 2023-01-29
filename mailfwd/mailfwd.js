const nodemailer = require("nodemailer");

exports.handler = async ({ body }) => {
  if (!body.trim()) {
    return { statusCode: 400 };
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
    subject: `[mailfwd] New message`,
    text: body,
  });

  return { statusCode: 200 };
};
