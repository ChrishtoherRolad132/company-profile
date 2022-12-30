import * as dotenv from 'dotenv';
dotenv.config();
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.dotenv.MAIL_ID,
        pass: process.dotenv.PASS
    },
});

const SendEmail = async (mailDetails, callback) => {
    try{
        const info = await transporter.SendEmail(mailDetails)
        callback(info);
    } catch(error) {
        console.log(error);
    }
}
