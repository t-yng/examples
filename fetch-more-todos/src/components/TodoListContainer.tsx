import { useCallback, useEffect, useState } from "react";
import { Todo } from "../type";
import { TodoList } from "./TodoList";
import { useFetch } from "./useFetch";
import { useTodos } from "./useTodos";

export const TodoListContainer = () => {
  const { todos, fetchMore, hasMore } = useTodos();
  return <TodoList todos={todos} onClick={fetchMore} hasMore={hasMore} />;
};
