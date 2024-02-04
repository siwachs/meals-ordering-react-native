import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
      })
      .catch((e) => {
        setError(e);
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
  }, []);

  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};

AuthenticationContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
