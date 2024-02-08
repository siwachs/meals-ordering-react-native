import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "../firebase";
const auth = getAuth();

const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const registerRequest = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const signOutRequest = () => {
  return signOut(auth);
};

export { loginRequest, registerRequest, signOutRequest };
