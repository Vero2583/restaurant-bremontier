import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';

import authRoutes from './routes/auth.route.js';
import { authMiddleware } from './middlewares/auth.middleware.js';

import allergenesRoutes from './routes/allergenes.route.js'
import menusRoutes from './routes/menus.route.js'
import entreesRoutes from './routes/entrees.route.js'
import platsRoutes from './routes/plats.route.js'
import dessertsRoutes from './routes/desserts.route.js'
import boissonsRoutes from './routes/boissons.route.js'
import reservationsRoutes from './routes/reservations.route.js'
import contactRoutes from './routes/contact.route.js'


const app = express();
app.use(express.json());
app.use(helmet());

// Se connecter avec le frontend
app.use(cors({
    origin: 'https://frontend-beige-one-90.vercel.app'
}));

// pour avoir accès au dossier upload
app.use('/uploads', express.static('uploads'));

app.use('/api', authRoutes);
app.get('/',authMiddleware, (req, res) => res.send('API Auth Backend fonctionne'));

app.use('/api/allergenes', allergenesRoutes);
app.use('/api/menus', menusRoutes);//
app.use('/api/entrees', entreesRoutes);
app.use('/api/plats', platsRoutes);
app.use('/api/desserts', dessertsRoutes);
app.use('/api/boissons', boissonsRoutes);
app.use('/api/reservations', reservationsRoutes);
app.use('/api/contact', contactRoutes);






export default app;