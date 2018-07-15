import validate from 'express-validation';
import { ensureAuthenticated } from '../auth/controller';
import {
  getToDoItemsForUser,
  getToDoItembyId,
  updateToDo,
  createToDos,
  destroyToDo,
} from './model';
import validation from './validation';

const getToDos = (req, res, next) => {
  getToDoItemsForUser(req.id)
    .then(todos => {
      req.todos = todos;
      next();
    })
    .catch(err => next({ status: 500, detail: err }));
};

const checkToDo = (req, res, next) => {
  getToDoItembyId(req.params.id)
    .then(todo => {
      if (!todo) next({ status: 404, detail: 'Invalid Id' });
      req.todo = todo;
      next();
    })
    .catch(err => next({ status: 500, detail: err }));
};

const modifyToDos = (req, res, next) => {
  updateToDo(req.body, req.params.id)
    .then(todos => next())
    .catch(err => next({ status: 500, detail: err }));
};

const createNewToDos = (req, res, next) => {
  createToDos(req.body, req.id)
    .then(todos => next())
    .catch(err => next({ status: 500, detail: err }));
};

const delToDos = (req, res, next) => {
  destroyToDo(req.params.id)
    .then(todos => next())
    .catch(err => next({ status: 500, detail: err }));
};

export const listToDos = [ensureAuthenticated, getToDos];
export const getById = [ensureAuthenticated, checkToDo];
export const addToDo = [validate(validation.add), ensureAuthenticated, createNewToDos];
export const editToDo = [validate(validation.edit), ensureAuthenticated, checkToDo, modifyToDos];
export const deletToDo = [ensureAuthenticated, checkToDo, delToDos];
