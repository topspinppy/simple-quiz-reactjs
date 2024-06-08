/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react"
import { QuizStore } from "../store/quiz.store";

type QuizContext = {
  readonly store: QuizStore;
}

interface IQuizContextProviderProps {
  children: React.ReactNode;
  store: QuizStore;
}

const QuizContext = createContext<QuizContext | null>(null)

export function useQuizContext(): QuizContext {
  const quizContext = useContext(QuizContext);
  if (!quizContext) {
    throw new Error('useQuizContext must be used within QuizContextProvider');
  }

  return quizContext;
}

export function QuizContextProvider(props: IQuizContextProviderProps) {
  const { children, store } = props;
  return (
    <QuizContext.Provider value={{ store }}>
      {children}
    </QuizContext.Provider>
  )
}