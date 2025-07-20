import express, { Request, Response } from 'express';
import dotenv from 'dotenv';'./routes/tumuloRoutes'
import tumuloRoutes from './routes/tumuloRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'API do Cemitério rodando com TypeScript!' });
});

app.use('/tumulos', tumuloRoutes);

app.listen(PORT, () => console.log(`✅ API rodando na porta ${PORT}`));

