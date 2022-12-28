import { Request, Response } from 'express';


const users = [
    { name: 'Marco', email: 'caldeiran391@gmail.com' },
];

export default {
    async index(req, res) {
        return res.json(users)
    }
};