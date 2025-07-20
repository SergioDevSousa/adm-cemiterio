import { Request, Response } from 'express';
import { pool } from '../database/db';
import { Tumulo } from '../models/tumulo';

export const listarTumulos = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM tumulos ORDER BY id');
    res.json(result.rows);
  } catch (error: any) {
    console.error('❌ ERRO AO LISTAR TÚMULOS');
    console.error(error.stack || error.message || error);
    res.status(500).json({ error: error.message || 'Erro desconhecido' });
  }
};

export const criarTumulo = async (req: Request, res: Response) => {
  const { numero, quadra, status }: Tumulo = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO tumulos (numero, quadra, status) VALUES ($1, $2, $3) RETURNING *',
      [numero, quadra, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar túmulo' });
  }
};

export const atualizarTumulo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { numero, quadra, status }: Tumulo = req.body;
  try {
    const result = await pool.query(
      'UPDATE tumulos SET numero=$1, quadra=$2, status=$3 WHERE id=$4 RETURNING *',
      [numero, quadra, status, id]
    );
    if (result.rowCount === 0) return res.status(404).json({ error: 'Túmulo não encontrado' });
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar túmulo' });
  }
};

export const deletarTumulo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM tumulos WHERE id=$1', [id]);
    if (result.rowCount === 0) return res.status(404).json({ error: 'Túmulo não encontrado' });
    res.json({ message: 'Túmulo removido' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar túmulo' });
  }
};
