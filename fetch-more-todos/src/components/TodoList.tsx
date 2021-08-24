import React from "react";
import { FC } from "react";
import { TodoProps, Todo } from "./Todo";

type TodoListProps = {
  todos: TodoProps[];
  hasMore: boolean;
  onClick: () => void;
};

// eslint-disable-next-line react/display-name
export const TodoList: FC<TodoListProps> = React.memo((props) => {
  return (
    <div style={{ margin: 20 }}>
      <ul>
        {props.todos.map((todo) => (
          <Todo key={todo.title} title={todo.title} user={todo.user} />
        ))}
      </ul>
      {props.hasMore && (
        <button style={{ marginLeft: 25 }} onClick={props.onClick}>
          もっと見る
        </button>
      )}
    </div>
  );
});
