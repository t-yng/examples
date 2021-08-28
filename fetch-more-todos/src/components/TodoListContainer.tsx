import { TodoList } from "./TodoList";
import { useTodos } from "./useTodos";

export const TodoListContainer = () => {
  const { state, fetchMore } = useTodos();
  return (
    <TodoList todos={state.todos} onClick={fetchMore} hasMore={state.hasMore} />
  );
};
