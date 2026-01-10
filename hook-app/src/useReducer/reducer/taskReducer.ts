import * as z from "zod/v4";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export type taskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

const todoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const taskStateSchema = z.object({
  todos: z.array(todoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
});

export const getInitialState = (): TaskState => {
  const stateLocalStorage = localStorage.getItem("todos-state");
  if (!stateLocalStorage)
    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0,
    };
  //validar mediante zod
  const res = taskStateSchema.safeParse(JSON.parse(stateLocalStorage));
  if (res.error) {
    console.log(res.error);
    return {
      todos: [],
      length: 0,
      completed: 0,
      pending: 0,
    };
  }
  return res.data;
};

export const taskReducer = (
  state: TaskState,
  action: taskAction,
): TaskState => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: payload.trim(),
        completed: false,
      };
      const newArray = [...state.todos, newTodo];
      return {
        ...state,
        todos: newArray,
        length: newArray.length,
        pending: state.pending + 1,
      };
    }
    case "TOGGLE_TODO": {
      const newArray = state.todos.map((todo) => {
        return todo.id === payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
      const newPending = newArray.filter((todo) => !todo.completed).length;
      return {
        ...state,
        todos: newArray,
        pending: newPending,
        completed: newArray.length - newPending,
      };
    }
    case "DELETE_TODO": {
      const newArray = state.todos.filter((todo) => todo.id !== payload);
      const newPending = newArray.filter((todo) => !todo.completed).length;
      return {
        ...state,
        todos: newArray,
        length: newArray.length,
        pending: newPending,
        completed: newArray.length - newPending,
      };
    }
    default:
      return state;
  }
};
