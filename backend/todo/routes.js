import express from 'express';
import { listToDos, addToDo, deletToDo, editToDo } from './controller';

const router = express.Router();

router.get('/', listToDos, (req, res) => {
  res.status(200).json({ todos: req.todos });
});

router.post('/', addToDo, (req, res) => {
  res.status(201).json({ success: true, detail: 'Created Successfully' });
});
router.delete('/:id', deletToDo, (req, res) => {
  res.status(204).send();
});
router.patch('/:id', editToDo, (req, res) => {
  res.status(204).send();
});

export default router;
