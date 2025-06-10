
import { response } from 'express';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const {name, email, subject, message} = await request.json();

        if (!name || !email || !subject || !message) {
            return Response.json(
                {success: false, error: 'All fields are required'},
                {status: 400}
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            },
        });

        const emailContent = `
        <h3>Contact Form</h3>
        <p><strong>Name:</strong>${name}</p>
        <p><strong>Email:</strong>${email}</p>
        <p><strong>Subject:</strong>${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        `

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Contact Form: ${subject}`,
            html: emailContent,
            text:`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
        })

        return Response.json(
            {success: true,},
            {message: 'Email sent successfully'}
        );


    }
    catch (error) {
        return Response.json(
            {success: false},
            {message: 'Unable to send message'},
            {status: 405},
        )
    }

}