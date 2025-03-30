import nodemailer from "nodemailer";

export default async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  try {
    console.log("test email");
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jason.yecyec023@gmail.com",
        pass: "zezkdjlarribhcfx",
      },
    });

    const mailOptions = {
      from: email,
      to: "jason.yecyec023@gmail.com",
      subject: name,
      text: message,
    };

    const data = await transporter.sendMail(mailOptions);
    res.send(data?.message);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
