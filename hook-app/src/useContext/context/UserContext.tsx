import {
  createContext,
  type PropsWithChildren,
  useEffect,
  useState,
} from "react";

import { type User, users } from "../mocks/user-mock.data";

type authStatus = "checking" | "authenticated" | "not-authenticated";

interface UserContextProps {
  //state
  authStatus: authStatus;
  user: User | null;

  //methods
  login: (userId: number) => boolean;
  logOut: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({} as UserContextProps);

//HOC
export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<authStatus>("checking");
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (id: number) => {
    const user = users.find((user) => user.id === id);
    if (!user) {
      console.log(`User with id: ${id} not found`);
      setUser(null);
      setAuthStatus("not-authenticated");
      return false;
    }
    setUser(user);
    setAuthStatus("authenticated");
    localStorage.setItem("user", id.toString());
    return true;
  };

  const handleLogOut = () => {
    setAuthStatus("not-authenticated");
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const userId = localStorage.getItem("user");
    if (userId) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      handleLogin(Number(userId));
      return;
    }
    handleLogOut();
  }, []);

  return (
    <UserContext
      value={{
        authStatus: authStatus,
        user: user,
        login: handleLogin,
        logOut: handleLogOut,
      }}
    >
      {children}
    </UserContext>
  );
};
