import { createContext, useState, useMemo } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import PropTypes from "prop-types";
import {
  loginRequest,
  registerRequest,
  signOutRequest,
} from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoading(false);
      setUser(user);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords did not match.");
      return;
    }
    setIsLoading(true);
    registerRequest(email, password)
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    setUser(null);
    signOutRequest();
  };

  const contextValue = useMemo(() => {
    return {
      user,
      isLoading,
      error,
      onLogin,
      onRegister,
      onLogout,
    };
  }, [user, isLoading, error]);

  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};

AuthenticationContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
