import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import QuizPage from "./pages/quiz";


function App() {
  return (
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
  );
}

export default App;
