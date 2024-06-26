import { Box, Typography } from "@mui/material";
import { useQuizContext } from "../context/QuizContext";
import AnswerButtonSet from "../components/AnswerButton";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toJS } from "mobx";

function QuizPage() {
  const context = useQuizContext();
  const navigate = useNavigate();

  const {
    question: rawQuestion,
    questionIndex,
    correctAnswer,
    handleCheckAnswer,
    isQuizEnd,
  } = context.store;

  useEffect(() => {
    if (isQuizEnd) {
      navigate("/result");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isQuizEnd]);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box
          bgcolor="whitesmoke"
          width="40rem"
          height="20rem"
          borderRadius="1rem"
          padding={5}
        >
          {!isQuizEnd && (
            <>
              {questionIndex + 1 + `/` +rawQuestion.length}
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems={"center"}
                mb="2rem"
              >
                <Typography variant="h6">
                  {rawQuestion[questionIndex]?.question}
                </Typography>
              </Box>
              <Box>
                <AnswerButtonSet
                  questionIndex={questionIndex}
                  successAnswer={toJS(correctAnswer)}
                  options={rawQuestion[questionIndex]?.options ?? []}
                  onClick={(value, index) => {
                    handleCheckAnswer(value, index);
                  }}
                />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default observer(QuizPage);
