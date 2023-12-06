export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const todos: Record<string, Todo> = {};

export const addTodo = (todo: Todo) => {
  todos[todo.id] = todo;
};

export const getTodo = (id: string) => {
  return todos[id];
};

export const getTodos = () => {
  return todos;
};

export const updateTodo = (id: string, todo: Todo) => {
  todos[id] = todo;
};

export const deleteTodo = (id: string) => {
  delete todos[id];
};
