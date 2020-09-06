import { useState } from "react";
import { User } from "../interfaces";

const readUser = (): User | undefined => {
  const user = sessionStorage.getItem("user");
  return user != null ? JSON.parse(user) : undefined;
};

export const useUser = () => {
  const [user] = useState<User | undefined>(readUser());

  return {
    user,
  };
};
