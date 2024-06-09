import { Button } from "@mui/material";
import { observer } from "mobx-react-lite";

interface IAnswerButtonSetProps {
  options: string[];
  onClick(answer: string, index: number): void;
  successAnswer: boolean[][];
  questionIndex: number;
}

// eslint-disable-next-line react-refresh/only-export-components
function AnswerButtonSet(props: IAnswerButtonSetProps) {
  const { options, onClick, successAnswer, questionIndex } = props;
  return (
    <>
      {options.map((option, index) => {
        console.log(successAnswer[questionIndex]);
        return (
          <Button
            variant="outlined"
            fullWidth
            sx={{ mb: 1 }}
            size="large"
            key={index}
            {...(typeof successAnswer[questionIndex][index] !== "string" &&
              Boolean(successAnswer[questionIndex][index]) === false && {
                color: "error",
              })}
            onClick={() => {
              onClick(option, index);
            }}
          >
            {option}
          </Button>
        );
      })}
    </>
  );
}

export default observer(AnswerButtonSet);
