import { Router } from 'express';
import { PersonajeService } from '../Services/PersonajeService.js';

const router = Router();
const Personajes = new PersonajeService();

router.get('', async (req, res) => {
  const movies=req.query.movies
  const name =req.query.name
  const age =req.query.age
  const person = await Personajes.getList(movies,name,age);
  return res.status(200).json(person);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id
    const personajesId = await Personajes.getById(id);
    return res.status(200).send(personajesId)
  
});

router.post('', async (req, res) => {
  const personajes = await Personajes.insert(req.body);
  return res.status(201).json(personajes);
});

router.put('/:id', async(req, res) => {
  const id = req.params.id
  const personajeCambiado = await Personajes.updateById(id,req.body);
  return res.status(200).send(personajeCambiado)
})


router.delete('/:id', async (req, res) => {
  const id = req.params.id
  const personajesEliminado = await Personajes.deleteById(id);
  return res.status(200).send(personajesEliminado)
});

export default router;