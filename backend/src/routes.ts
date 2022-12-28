import { Router } from 'express';
import UserControler from './controlers/UserControler';


const routes = Router();

routes.get('/users', UserControler.index);
routes.post('/users/create', UserControler.index);


export default routes;