import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const loginRequest = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
};

const registerRequest = (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
};

const signOutRequest = () => {
  const auth = getAuth();
  return signOut(auth);
};

export { loginRequest, registerRequest, signOutRequest };
