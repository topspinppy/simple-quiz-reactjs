/* eslint-disable react-refresh/only-export-components */
import { Box, TextField, Typography } from "@mui/material";
import { useQuizContext } from "../context/QuizContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

function HomePage() {
  const context = useQuizContext();
  const [name, setName] = useState<string>('');
  const navigate = useNavigate()

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
          padding={10}
        >
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems={"center"}
            mb="2rem"
          >
            <Typography variant="h4" fontWeight="800">Basic Quiz</Typography>
            <Typography variant="h4" fontWeight="200">คำถามง่ายๆ ง่ายจริงจริ๊งง</Typography>
          </Box>
          <Box>
            <TextField
              fullWidth
              label="กรุณากรอกชื่อของคุณและกด Enter"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  context.store.handleSetTemporaryName(name)
                  navigate('/quiz')
                }
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default observer(HomePage);
