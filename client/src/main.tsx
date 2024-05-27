import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./rtk/store.ts";
import "./global.css";
import CookieConsent from "./upunikself/components/cookie-consent.component.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
        <CookieConsent />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
