import { TodoItem } from '../db/models';

export const getToDoItemsForUser = userId =>
  TodoItem.findAll({
    where: {
      userId,
    },
  });

export const getToDoItembyId = id => TodoItem.findById(id);

export const updateToDo = (fields, id) => TodoItem.update({ ...fields }, { where: { id } });

export const destroyToDo = id =>
  TodoItem.findById(id).then(todoItem => {
    if (!todoItem) return null;
    return todoItem.destroy();
  });

export const createToDos = (item, userId) =>
  TodoItem.create({
    ...item,
    userId,
  });
