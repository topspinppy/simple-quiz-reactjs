import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import QuizPage from "./pages/quiz";
import ResultPage from "./pages/result";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;
