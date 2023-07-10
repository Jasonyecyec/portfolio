import nodemailer from "nodemailer";
import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

// Import and use the allowCors middleware
const allowCors = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
};

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use(
  cors({
    origin: "*",
  })
);
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   next();
// });

const sendEmail = async ({ name, email, message }) => {
  try {
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
    return data;
  } catch (err) {
    throw err;
  }
};

app.get("/", async (req, res) => {
  try {
    const response = await sendEmail();
    res.send(response.message);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post("/send", async (req, res) => {
  try {
    const response = await sendEmail(req.body);
    res.send(response.message);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
