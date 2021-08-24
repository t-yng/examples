import React from "react";
import { FC } from "react";

export type TodoProps = {
  title: string;
  user: {
    name: string;
  };
};

// eslint-disable-next-line react/display-name
export const Todo: FC<TodoProps> = React.memo((props) => {
  return (
    <li>
      <span>({props.user.name})</span>
      <span>{props.title}</span>
    </li>
  );
});
