import { Router } from 'express';
import { listarTumulos, criarTumulo, atualizarTumulo, deletarTumulo } from '../controllers/tumuloController';

const router = Router();

router.get('/', listarTumulos);
router.post('/', criarTumulo);
router.put('/:id', atualizarTumulo);
router.delete('/:id', deletarTumulo);

export default router;
