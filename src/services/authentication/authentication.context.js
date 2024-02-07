import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (auth, email, password) => {
    setIsLoading(true);
    loginRequest(auth, email, password)
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

  const contextValue = useMemo(() => {
    return {
      user,
      isLoading,
      error,
      onLogin,
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
