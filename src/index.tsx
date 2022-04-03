import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./pages/home/App";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./css/theme";
import { GlobalStyle } from "./css/global";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
