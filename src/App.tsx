import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import { QuizContextProvider } from "./context/QuizContext";
import QuizPage from "./pages/quiz";
import { QuizStore } from "./store/quiz.store";

function App() {
  const quizStore = new QuizStore()
  return (
    <QuizContextProvider store={quizStore}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </QuizContextProvider>
  );
}

export default App;
