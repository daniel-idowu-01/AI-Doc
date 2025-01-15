// const nodemailer = require('nodemailer'); 

// transport = nodemailer.createTransport({
//     service: 'gmail',
//     host: process.env.EMAIL_HOST,
//     port: process.env.EMAIL_PORT, 
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//     },
// });

// transport.verify().then(() => {
//     console.log('Connected to email server');
// }).catch((err) => {
//     console.log(err);
// });

// const sendEmail = async (to, subject, text, html) => {
//     const mailOptions = {
//         from: process.env.EMAIL_FROM,
//         to,
//         subject,
//         text,
//         html,
//     }

//     await transport.sendMail(mailOptions);
// }

// const sendResetPasswordEmail = async (to, token) => {
//     const subject = 'Reset Password';
//     const resetUrl = `http://localhost:3000/reset-password?token=${token}`;
//     const text = `To reset your password, click here: ${resetUrl}`;
//     const html = `<p>To reset your password, click here: <a href="${resetUrl}">${resetUrl}</a></p>`;

//     await sendEmail(to, subject, text, html);
// }

// const sendVerificationEmail = async (to, token) => {
//     const subject = 'Email Verification';
//     const verificationUrl = `http://localhost:3000/verify-email?token=${token}`;
//     const text = `To verify your email, click here: ${verificationUrl}`;
//     const html = `<p>To verify your email, click here: <a href="${verificationUrl}">${verificationUrl}</a></p>`;

//     await sendEmail(to, subject, text, html);
// }


// module.exports = {
//     transport,
//     sendEmail,
//     sendResetPasswordEmail,
//     sendVerificationEmail
// }
