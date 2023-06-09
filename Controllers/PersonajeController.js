import { Router } from 'express';
import { PersonajeService } from '../Services/PersonajeService.js';
import { Authenticate } from '../common/jwt.strategy.js';

const router = Router();
const Personajes = new PersonajeService();

router.get('', Authenticate, async (req, res) => {
const person = await Personajes.getList(req);
  return res.status(200).json(person);
});

router.get('/:id',Authenticate, async (req, res) => {
  const id = req.params.id
  if (id < 1) {
    res.status(400).send()
  }
  const personajesId = await Personajes.getById(id);
  if (!personajesId) {
    res.status(404).send()
  }

  return res.status(200).send(personajesId)

});

router.post('',Authenticate, async (req, res) => {
  const personajes = await Personajes.insert(req.body);
  return res.status(201).json(personajes);
});

router.put('/:id',Authenticate, async (req, res) => {
  const id = req.params.id

  if (id < 1) {
    res.status(400).send()
  }
  const personajeCambiado = await Personajes.updateById(id, req.body);
  if (personajeCambiado.rowsAffected[0] == 0) {
    return res.status(404).send()
  }

  return res.status(200).send(personajeCambiado)
})


router.delete('/:id',Authenticate, async (req, res) => {
  const id = req.params.id

  if (id < 1) {
    res.status(400).send()
  }
  const personajesEliminado = await Personajes.deleteById(id);
  if (personajesEliminado.rowsAffected[0] == 0) {
    return res.status(404).send()
  }

  return res.status(200).send(personajesEliminado)
});

export default router;