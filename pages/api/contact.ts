
import { NextApiRequest, NextApiResponse } from 'next';



const nodemailer = require('nodemailer');

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {ime,email,poruka} = req.body;

    const transporter = nodemailer.createTransport({
        host: 's15.dukahosting.com',
        port: 465,
        secure: true,
        auth: {
            user: 'info@lan-digital.com',
            pass: 'mismodrugari1031',
            
        },
    })

    try {
        const emailMessage = await transporter.sendMail({
            from: email,
            to: 'info@lan-digital.com',
            subject: `Nova poruka od ${ime}`,
            html: `<p>Imate novu poruku</p><br>
            <p><strong> Ime Klijenta: </strong> ${ime} </p> <br>
            <p><strong> Poruka: </strong> ${poruka} </p> <br>`
        });
        console.log('Poruka poslata', emailMessage.messageId);
    } catch (error) {
        console.log(error);
    }
    
    res.status(200).json(req.body);
}
