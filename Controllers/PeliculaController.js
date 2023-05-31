import { Router } from 'express';
import { PeliculaService } from '../Services/PeliculaService.js';

const router = Router();
const peliculaService = new PeliculaService();

router.get('', async (req, res) => {
  const peliculas = await peliculaService.getList();
  return res.status(200).json(peliculas);
  
});

router.get('/:id', async (req, res) => {
  const id = req.params.id
    if(id<1)
    {
        res.status(400).send()
    }
    const per = await peliculaService.getDetailsbyId(req.params.id);
     if(personajeId[0]==null)
     {
        res.status(404).send()
     }
    return res.status(200).send(personajeId)
});

router.post('', async (req, res) => {
  const peliculas = await peliculaService.insert(req.body);
  return res.status(201).json(peliculas);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id
  if(id!=req.body.Id)
  {
    res.status(400).send()
  }
  const peliculaCambiada = await peliculaService.updateById(req.body);
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
  const peliculaEliminada = await peliculaService.deleteById(req.params.id);

  if(peliculaEliminada.rowsAffected[0]==0)
  {
      res.status(404).send()
  }
  return res.status(200).send(peliculaEliminada)
});

export default router;