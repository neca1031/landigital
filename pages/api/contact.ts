import { NextApiRequest, NextApiResponse } from "next";

const nodemailer = require("nodemailer");


async function validateHuman(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, 
  {
    method: "POST",
  });
  const data = await response.json();
  console.log(data.success);
  return data.success;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { ime, email, poruka } = req.body;
  const token = req.body;
  const human = await validateHuman(token);
  if (!human) {
    res.status(400);
    console.log(token);
    console.log("Botino jedna");
    return;
  }
  const transporter = nodemailer.createTransport({
    host: "s15.dukahosting.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  try {
    const emailMessage = await transporter.sendMail({
      from: email,
      to: "info@lan-digital.com",
      subject: `Nova poruka od ${ime}`,
      html: `<p>Imate novu poruku</p><br>
            <p><strong> Ime Klijenta: </strong> ${ime} </p> <br>
            <p><strong> Email Adresa: </strong> ${email} </p> <br>
            <p><strong> Poruka: </strong> ${poruka} </p> <br>`,
    });
    console.log("Poruka poslata", emailMessage.messageId);
  } catch (error) {
    console.log(error);
  }

  res.status(200).json(req.body);
};
