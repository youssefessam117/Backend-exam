import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
export const sendEmail = async (recever, template) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email, // generated ethereal user
      pass: process.env.emailPassword, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"Fred Foo 👻" <${process.env.email}>`, // sender address
    to: recever, // list of receivers
    subject: "Hello ✔", // Subject line
    html: template, // html body
  });
};
