const nodemailer = require("nodemailer");
const emailValidator = require("email-validator");

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  if (!name.trim()) {
    return { statusCode: 400, body: "name-required" };
  }

  if (!message.trim()) {
    return { statusCode: 400, body: "message-required" };
  }

  if (!emailValidator.validate(email)) {
    return { statusCode: 400, body: "email-not-valid" };
  }

  // const transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   auth: {
  //     user: "[USERNAME]",
  //     pass: "[PASSWORD]",
  //   },
  // });

  // // send email
  // await transporter.sendMail({
  //   from: "from_address@example.com",
  //   to: "to_address@example.com",
  //   subject: "Test Email Subject",
  //   html: "<h1>Example HTML Message Body</h1>",
  // });

  return { statusCode: 200, body: "mail-sent" };
};
