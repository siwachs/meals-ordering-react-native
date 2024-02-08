import { initializeApp, getApp, getApps } from "firebase/app";
import { firebaseApiKey } from "@env";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import Navigation from "./src/infrastructure/navigation";

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "meals-ordering-a817b.firebaseapp.com",
  projectId: "meals-ordering-a817b",
  storageBucket: "meals-ordering-a817b.appspot.com",
  messagingSenderId: "415090686951",
  appId: "1:415090686951:web:d2140f41714a3719b85b42",
};

!getApps().length ? initializeApp(firebaseConfig) : getApp();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
