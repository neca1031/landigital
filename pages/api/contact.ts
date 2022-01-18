import nodemailer from 'nodemailer';



export default async (req, res) => {
    const {ime,email,poruka} = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.user,
            pass: process.env.pass,
        }
    })

    try {
        const email = await transporter.sendMail({
            from: email,
            to: 'nemanjag3005@gmail.com',
            subject: `Nova poruka od ${ime}`,
            html: `<p>Imate novu poruku</p><br>
            <p><strong> Ime: </strong> ${ime} </p> <br>
            <p><strong> Poruka: </strong> ${poruka} </p> <br>`
        });
        console.log('Poruka poslata', emailRes.messageId);
    } catch (err) {
        console.log(err);
    }
    
    res.status(200).json(req.body);
}
