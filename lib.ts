export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const todos: Record<string, Todo> = {};

export const addTodo = (todo: Todo) => {
  todos[todo.id] = todo;
};

export const getTodo = function (id: string) {
  return todos[id];
};

export function getTodos() {
  return todos;
}

export default (id: string, todo: Todo) => {
  todos[id] = todo;
};

export const deleteTodo = (id: string) => {
  delete todos[id];
};
