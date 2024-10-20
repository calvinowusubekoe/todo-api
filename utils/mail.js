import { createTransport } from "nodemailer";

export const mailTransporter = createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'calvinbekoe7@gmail.com',
        pass: 'dvtxgspngmnccnlx'
    },
    from: 'calvinbekoe7@gmail.com',
});