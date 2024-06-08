import { Box, Typography } from "@mui/material";
import Input from "../components/Input";

function HomePage() {
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
          <Box display="flex" justifyContent="center" flexDirection="column" alignItems={"center"} mb="2rem">
            <Typography variant="h4">Basic Quiz</Typography>
            <Typography variant="h4">คำถามง่ายๆ</Typography>
          </Box>
          <Box>
            <Input fullWidth label="กรุณากรอกชื่อของคุณและกด Enter" />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
