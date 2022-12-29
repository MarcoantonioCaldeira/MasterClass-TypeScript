interface IMailTo {
    nome: string;
    email: string;
}

interface IMailMassage {
    subject: string;
    body: string;
    attachment?: string[];
}


interface IMessageDTO {
    to: IMailTo;
    massage: IMailMassage;
}

interface IEmailService {
    sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService {
    sendEmail({ to, message }: IMessageDTO) {
        console.log(`Email Enviado para ${to.nome}: ${message.subject}`)
    }
}

export default EmailService;