import nodemailer from "nodemailer";

export default async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jason.yecyec023@gmail.com",
        pass: "zezkdjlarribhcfx",
      },
    });

    const mailOptions = {
      from: name,
      to: email,
      subject: name,
      text: message,
    };

    const data = await transporter.sendMail(mailOptions);
    res.send(data.message);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
