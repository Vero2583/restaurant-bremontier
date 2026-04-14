import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';

import authRoutes from './routes/auth.route.js';
import { authMiddleware, authorize } from './middlewares/auth.middleware.js';
import allergenesRoutes from './routes/allergenes.route.js'





const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:5000'
}));

app.use('/api/auth', authRoutes);
app.get('/',authMiddleware, authorize(['ADMIN', 'USER']), (req, res) => res.send('API Auth Backend fonctionne'));

app.use('/api/allergenes', allergenesRoutes);






export default app;