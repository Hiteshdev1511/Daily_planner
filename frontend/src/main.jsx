import { createRoot } from "react-dom/client";
import "./App.css"
import App from "./App.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import Routes from "./Routes.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App>
      <Routes />
    </App>
  </Provider>
);
