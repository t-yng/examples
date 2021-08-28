import { useCallback, useEffect, useState } from "react";
import { PagerMeta, Todo } from "../type";
import { useFetch } from "./useFetch";

type State = {
  todos: Todo[];
  currentPage: number;
  hasMore: boolean;
};

// Next.js の Fast Refresh で状態もリセットする
// @see: https://nextjs.org/docs/basic-features/fast-refresh#tips
// @refresh reset
export const useTodos = () => {
  const [state, setState] = useState<State>({
    todos: [],
    currentPage: 1,
    hasMore: false,
  });
  const { data, loading, doFetch } = useFetch<{
    todos: Todo[];
    meta: PagerMeta;
  }>(async (page: number) => {
    const result = await fetch(`http://localhost:3000/api/todos?page=${page}`);
    return result.json();
  });

  console.log("hoge");

  useEffect(() => {
    doFetch(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data != null) {
      const hasMore = data.meta.nextPage > 0;
      setState((state) => ({
        currentPage: data.meta.currentPage,
        hasMore: hasMore,
        todos: [...state.todos, ...data.todos],
      }));
    }
  }, [data]);

  const fetchMore = useCallback(() => {
    doFetch(state.currentPage + 1);
  }, [doFetch, state.currentPage]);

  return {
    state,
    fetchMore,
    loading,
  };
};
