import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../context/QuizContext";
import { observer } from "mobx-react-lite";
import { HallOfFame as HallOfFameType } from "../store/quiz.store";
import HallOfFame from "../components/HallOfFame";
import LeaderList from "../components/LeaderList";


// eslint-disable-next-line react-refresh/only-export-components
function ResultPage() {
  const context = useQuizContext();
  const navigate = useNavigate();

  const leader = () => {
    const rawLeader = JSON.parse(
      localStorage.getItem("leader") || "[]"
    ) as HallOfFameType[];
    return rawLeader.sort((a, b) => b.score - a.score);
  };
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
          height="auto"
          borderRadius="1rem"
          padding={10}
        >
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems={"center"}
            mb="2rem"
          >
            <Typography variant="h4">🏆 Leader board 🏆</Typography>
          </Box>
          <Box>
            <HallOfFame leader={leader()} />
          </Box>
          <Box>
            <LeaderList lists={leader().slice(3)} />
          </Box>
          <Box mt="2rem">
            <Button
              fullWidth
              onClick={() => {
                navigate("/");
                context.store.resetQuiz();
              }}
              variant="contained"
              color="success"
              size="large"
            >
              Restart Quiz
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default observer(ResultPage);
