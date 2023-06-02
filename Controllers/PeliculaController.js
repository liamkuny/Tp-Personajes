import { Router } from 'express';
import { Pelicula } from '../Models/Pelicula.js';


const router = Router();
const pelicula = new Pelicula();

router.get('', async (req, res) => {
  const peliculas = await pelicula.getList();
  return res.status(200).json(peliculas);
  
});

router.get('/:id', async (req, res) => {
  const id = req.params.id
    if(id<1)
    {
        res.status(400).send()
    }
    const per = await pelicula.getDetailsbyId(req.params.id);
     if(personajeId[0]==null)
     {
        res.status(404).send()
     }
    return res.status(200).send(personajeId)
});

router.post('', async (req, res) => {
  const peliculas = await pelicula.insert(req.body);
  return res.status(201).json(peliculas);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id
  if(id!=req.body.Id)
  {
    res.status(400).send()
  }
  const peliculaCambiada = await pelicula.updateById(req.body);
  if(peliculaCambiada.rowsAffected[0]==0)
  {
      res.status(404).send()
  }
  return res.status(200).send(peliculaCambiada)
});

router.delete('/:id', async (req, res) => {
  
  const id = req.params.id
  if(id<1)
  {
      res.status(400).send()
  }
  const peliculaEliminada = await pelicula.deleteById(req.params.id);

  if(peliculaEliminada.rowsAffected[0]==0)
  {
      res.status(404).send()
  }
  return res.status(200).send(peliculaEliminada)
});

export default router;