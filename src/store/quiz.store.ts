import { makeAutoObservable, toJS } from "mobx";
import QUESTION, { IQuestion } from "../context/question";

export class QuizStore {
  private _temporaryName = "";
  private _question: IQuestion[] = [];
  private _questionIndex: number = 0;
  constructor() {
    this._question = QUESTION;
    makeAutoObservable(this);
  }

  get temporaryName() {
    return toJS(this._temporaryName);
  }

  get question() {
    const array = [...this._question];
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
    return array;
  }

  get questionIndex() {
    return this._questionIndex;
  }

  handleSetTemporaryName(name: string) {
    this._temporaryName = name;
  }

  nextQuestion() {
    this._questionIndex = this._questionIndex + 1;
  }
}
