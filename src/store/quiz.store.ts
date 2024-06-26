import { makeAutoObservable, runInAction, toJS } from "mobx";
import QUESTION, { IQuestion } from "../context/question";

export type HallOfFame = {
  name: string;
  score: number;
};
export class QuizStore {
  private _temporaryName = "";
  private _question: IQuestion[] = [];
  private _correctAnswer: (boolean | string)[][] = [[]];
  private _questionIndex: number = 0;
  private _score: number = 0;
  private _isQuizEnd: boolean = false;

  constructor() {
    this._question = this.handleShuffleQuestion(QUESTION);
    makeAutoObservable(this);
  }

  get temporaryName() {
    return toJS(this._temporaryName);
  }

  get correctAnswer() {
    return this._correctAnswer;
  }

  get question() {
    return this._question;
  }

  get questionIndex() {
    return this._questionIndex;
  }

  get isQuizEnd() {
    return this._isQuizEnd;
  }

  private handleShuffleQuestion(question: IQuestion[]) {
    const array = [...question];
    for (
      let currentIndex = array.length - 1;
      currentIndex > 0;
      currentIndex--
    ) {
      const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    const initialCorrectAnswer = array.map(() => ["", "", "", ""]);
    this._correctAnswer = initialCorrectAnswer;
    return array;
  }

  private handleAddScore = () => {
    this._score = this._score + 1;
  };

  handleSummarizeLeader() {
    const score = this._score;
    const name = this.temporaryName;

    const hallOfFame = JSON.parse(localStorage.getItem("leader") || "[]");

    if (!Array.isArray(hallOfFame)) {
      console.error("Data in localStorage is not in the expected format.");
      return;
    }

    const tempHallOfFame = [
      ...hallOfFame,
      {
        name,
        score,
      },
    ];
    localStorage.setItem("leader", JSON.stringify(tempHallOfFame));
  }

  handleCheckAnswer = (currentAnswer: string, index: number) => {
    const correctAnswer = this._question[this._questionIndex].answer;
    runInAction(() => {
      if (correctAnswer === currentAnswer) {
        this._correctAnswer[this.questionIndex][index] = true;
        this.handleAddScore();
        this.handleNextQuestion();
      } else {
        this._correctAnswer[this.questionIndex][index] = false;
        setTimeout(() => {
          this.handleNextQuestion();
        }, 1000);
      }
    });
  };

  handleNextQuestion = () => {
    const quizNo = this._questionIndex + 1;
    const allQuizNo = this._question.length;
    if (quizNo === allQuizNo) {
      this.handleSummarizeLeader();
      this._isQuizEnd = true;
      this._score = 0;
      return;
    }

    this._questionIndex = this._questionIndex + 1;
    this._isQuizEnd = false;
  };

  handleSetTemporaryName(name: string) {
    if (name === "") {
      return "empty";
    }
    this.resetQuiz();
    this._temporaryName = name;
    localStorage.setItem("currentName", name);
  }

  nextQuestion() {
    this._questionIndex = this._questionIndex + 1;
  }

  resetQuiz() {
    this._isQuizEnd = false;
    this._questionIndex = 0;
  }
}
