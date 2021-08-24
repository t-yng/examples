import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { PagerMeta, Todo } from "../type";
import { useFetch } from "./useFetch";

type State = {
  [page: number]: Todo[];
  pages: Set<number>;
};

type Action = {
  type: "addTodos";
  page: number;
  todos: Todo[];
};

const initialState: State = {
  pages: new Set(),
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "addTodos": {
      state.pages.add(action.page);
      return {
        ...state,
        [action.page]: action.todos,
        pages: state.pages,
      };
    }
    default: {
      return state;
    }
  }
};

export const useTodos = () => {
  const [page, setPage] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todos, setTodos] = useState<Todo[]>([]);
  const { data, loading, doFetch } = useFetch<{
    todos: Todo[];
    meta: PagerMeta;
  }>(async (page: number) => {
    const result = await fetch(`http://localhost:3000/api/todos?page=${page}`);
    return result.json();
  });
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (state == null) return;

    const todos = Array.from(state.pages).reduce<Todo[]>((acc, page) => {
      return acc.concat(state[page]);
    }, []);

    setTodos(todos);
  }, [state]);

  useEffect(() => {
    doFetch(page);
  }, [page, doFetch]);

  useEffect(() => {
    if (data != null) {
      dispatch({
        type: "addTodos",
        page: data.meta.currentPage,
        todos: data.todos,
      });

      console.log(data.meta);
      console.log(data.meta.currentPage < data.meta.totalPages);
      setHasMore(data.meta.currentPage < data.meta.totalPages);
    }
  }, [data]);

  const fetchMore = useCallback(() => {
    setPage((page) => page + 1);
  }, []);

  return {
    todos,
    fetchMore,
    loading,
    hasMore,
  };
};
