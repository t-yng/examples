import { useState, useEffect } from "react";
import { User } from "../interfaces";

const readUser = (): User | undefined => {
  const user = sessionStorage.getItem("user");
  return user != null ? JSON.parse(user) : undefined;
};

export const useUser = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUser(readUser());
      setLoading(false);
    }, 500);
  }, []);

  return {
    user,
    loading,
  };
};
