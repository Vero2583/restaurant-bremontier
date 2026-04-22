import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';

import authRoutes from './routes/auth.route.js';
import { authMiddleware, authorize } from './middlewares/auth.middleware.js';

import allergenesRoutes from './routes/allergenes.route.js'
import menusRoutes from './routes/menus.route.js'
import entreesRoutes from './routes/entrees.route.js'
import platsRoutes from './routes/plats.route.js'
import dessertsRoutes from './routes/desserts.route.js'
import boissonsRoutes from './routes/boissons.route.js'
import reservationsRoutes from './routes/reservations.route.js'



const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:5000'
}));

app.use('/api/auth', authRoutes);
app.get('/',authMiddleware, authorize(['ADMIN', 'USER']), (req, res) => res.send('API Auth Backend fonctionne'));

app.use('/api/allergenes', allergenesRoutes);
app.use('/api/menus', menusRoutes);
app.use('/api/entrees', entreesRoutes);
app.use('/api/plats', platsRoutes);
app.use('/api/desserts', dessertsRoutes);
app.use('/api/boissons', boissonsRoutes);
app.use('/api/reservations', reservationsRoutes);






export default app;