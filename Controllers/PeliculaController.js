import { Router } from 'express';
import { PeliculaService } from '../Services/PeliculaService.js';


const router = Router();
const Pelicula = new PeliculaService();

router.get('', async (req, res) => {

  const peliculas = await Pelicula.getList(req);
  return res.status(200).json(peliculas);
  
});

router.get('/:id', async (req, res) => {
  const id = req.params.id
  if (id < 1) {
    res.status(400).send()
  }
  const peliculasId = await Pelicula.getById(id);
  if (!peliculasId) {
    res.status(404).send()
  }

  return res.status(200).send(peliculasId)
});

router.post('', async (req, res) => {
  const peliculas = await Pelicula.insert(req.body);
  return res.status(201).json(peliculas);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id

  if (id < 1) {
    res.status(400).send()
  }
  const peliculaCambiada = await Pelicula.updateById(id, req.body);
  if (peliculaCambiada.rowsAffected[0] == 0) {
    return res.status(404).send()
  }

  return res.status(200).send(peliculaCambiada)
});

router.delete('/:id', async (req, res) => {
  
  const id = req.params.id

  if (id < 1) {
    res.status(400).send()
  }
  const peliculaEliminada = await Pelicula.deleteById(id);
  if (peliculaEliminada.rowsAffected[0] == 0) {
    return res.status(404).send()
  }

  return res.status(200).send(peliculaEliminada)
});

export default router;