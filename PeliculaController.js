import { Router } from 'express';
import { PeliculaService } from '../Services/PeliculaService.js';

const router = Router();
const peliculaService = new PeliculaService();

router.get('', async (req, res) => {
  const peliculas = await peliculaService.getList();
  return res.status(200).json(peliculas);
});

router.get('/:id', async (req, res) => {
  const peliculas = await peliculaService.getDetailsbyId(req.params.id);
  return res.status(200).json(peliculas);
});

router.post('', async (req, res) => {
  const peliculas = await peliculaService.insert(req.body);
  return res.status(201).json(peliculas);
});

router.put('/:id', async (req, res) => {
  const peliculas = await peliculaService.updateById(req.body);

  return res.status(200).json(peliculas);
});

router.delete('/:id', async (req, res) => {
  const peliculas = await peliculaService.deletepeliculasById(req.params.id);
  return res.status(200).json(peliculas);
});

export default router;