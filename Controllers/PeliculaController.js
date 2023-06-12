import { Router } from 'express';
import { PeliculaService } from '../Services/PeliculaService.js';


const router = Router();
const pelicula = new PeliculaService();

router.get('', async (req, res) => {

  const title = req.query.title
  const order = req.query.order
  const peliculas = await pelicula.getList(title,order);

  return res.status(200).json(peliculas);
  
});

router.get('/:id', async (req, res) => {
  const id = req.params.id
    const peliculaId = await pelicula.getById(id);
    console.log(peliculaId)
    return res.status(200).send(peliculaId)
});

router.post('', async (req, res) => {
  const peliculas = await pelicula.insert(req.body);
  return res.status(201).json(peliculas);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id
  console.log(id)
 
  const peliculaCambiada = await pelicula.updateById(id, req.body);
  return res.status(200).send(peliculaCambiada)
});

router.delete('/:id', async (req, res) => {
  
  const id = req.params.id
  const peliculaEliminada = await pelicula.deleteById(id);
  return res.status(200).send(peliculaEliminada)
});

export default router;