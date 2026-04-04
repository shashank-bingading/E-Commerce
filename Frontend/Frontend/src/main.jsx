import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./pages/ProfileScreen.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      // The App component, wrapped with the Provider to give it access to the Redux store
      <App />
    </Provider>
  </StrictMode>,
);
