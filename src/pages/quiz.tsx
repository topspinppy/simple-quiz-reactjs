import { Box, Typography, Button } from "@mui/material";
import { useQuizContext } from "../context/QuizContext";

function QuizPage() {
  const context = useQuizContext();
  const { question: rawQuestion, questionIndex } = context.store;

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
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems={"center"}
            mb="2rem"
          >
            <Typography variant="h6">
              {rawQuestion[questionIndex].question}
            </Typography>
          </Box>
          <Box>
            {rawQuestion[questionIndex].options.map((option) => {
              return (
                <Button variant="outlined" fullWidth sx={{ mb: 1}} size="large">
                  {option}
                </Button>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default QuizPage;
