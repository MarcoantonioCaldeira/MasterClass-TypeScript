import { Request, Response } from 'express';
import EmailService from '../services/EmailService';


const users = [
    { nome: 'Marco', email: 'caldeiran391@gmail.com' },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    }

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        EmailService.sendEmail({
            to: {
                nome: 'Marco Antonio',
                email: 'caldeiran391@gmail.com'
            },
            message: {
                subject: 'Bem-vindo ao Sistema!!!',
                body: 'Seja bem-vindo'
            }
        });

        return res.send();
    }
};