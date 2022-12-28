"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailService {
    sendEmail({ to, message }) {
        console.log(`Email Enviado para ${to.nome}: ${message.subject}`);
    }
}
exports.default = EmailService;
