import { Router } from 'express';
import { PersonajeService } from '../Services/PersonajeService.js';

const router = Router();
const Personajes = new PersonajeService();

router.get('', async (req, res) => {
  const person = await Personajes.getList();
  return res.status(200).json(person);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id
    if(id<1)
    {
        res.status(400).send()
    }
    const personajesId = await Personajes.getDetailsbyId(id);
     if(personajesId[0]==null)
     {
        res.status(404).send()
     }
    return res.status(200).send(personajesId)
  
});

router.post('', async (req, res) => {
  const personajes = await Personajes.insert(req.body);
  return res.status(201).json(personajes);
});

router.put('/:id', async(req, res) => {
  const id = req.params.id
  if(id!=req.body.Id)
  {
    res.status(400).send()
  }
  const personajeCambiado = await Personajes.updateById(req.body);
  if(personajeCambiado.rowsAffected[0]==0)
  {
      res.status(404).send()
  }
  return res.status(200).send(personajeCambiado)
})


router.delete('/:id', async (req, res) => {
  const id = req.params.id
  if(id<1)
  {
      res.status(400).send()
  }
  const personajesEliminado = await Personajes.deleteById(req.params.id);

  if(personajesEliminado.rowsAffected[0]==0)
  {
      res.status(404).send()
  }
  return res.status(200).send(personajesEliminado)
});

export default router;