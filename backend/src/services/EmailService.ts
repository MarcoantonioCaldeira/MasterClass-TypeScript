interface ImailTo {
    nome: string;
    email: string;
}

interface IMailMassage {
    subject: string;
    body: string;
    attachment?: string[];
}


interface MessageDTO {
    to: ImailTo;
    massage: IMailMassage;
}

interface IEmailService {
    sendMail(request: IEmailService): void;
}

class EmailService implements IEmailService {
    sendEmail({ to, message }: IMassage) {
        console.log(`Email Enviado para ${to.nome}: ${message.subject}`)
    }
}

export default EmailService;