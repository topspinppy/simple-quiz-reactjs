import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { QuizContextProvider } from "./context/QuizContext.tsx";
import { QuizStore } from "./store/quiz.store.ts";

const theme = createTheme({
  typography: {
    fontFamily: "Noto Sans Thai",
  },
});



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <QuizContextProvider store={new QuizStore()}>
          <App />
        </QuizContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
