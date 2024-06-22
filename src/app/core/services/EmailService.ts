import nodemailer from 'nodemailer';

export class EmailService {
    private transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: '',
                pass: '',
            },
        });
    }

    async sendMail(to: string, subject: string, text: string, html?: string): Promise<void> {
        try {
            await this.transporter.sendMail({
                from: '"Team GasGow" <glasgow@gmail.com>',
                to,
                subject,
                text,
                html,
            });
            console.log('Email Enviado Com Sucesso!');
        } catch (error) {
            console.error('Ocorreu um erro ao processar o envio', error);
        }
    }
}