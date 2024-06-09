import { Badge, Box, Grid, Typography } from "@mui/material";
import { HallOfFame as HallOfFameType } from "../store/quiz.store";

interface IHallOfFameProps {
  leader: HallOfFameType[];
}

function HallOfFame(props: IHallOfFameProps) {
  const { leader } = props;
  return (
    <Grid container spacing={0}>
      <Grid xs display="flex" alignItems="center" flexDirection="column">
        <Box height="2rem" />
        {leader[1] && (
          <>
            <Box>
              <Badge
                color="secondary"
                overlap="circular"
                badgeContent="2"
                variant="standard"
              >
                <Box
                  component="span"
                  sx={{
                    bgcolor: "#FFD700",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                  }}
                />
              </Badge>
            </Box>
            <Typography>{leader[1]?.name ?? "-"}</Typography>
          </>
        )}
      </Grid>
      <Grid xs={6} display="flex" alignItems="center" flexDirection="column">
        {leader[0] && (
          <>
            <Box>
              <Badge
                color="success"
                overlap="circular"
                badgeContent="1"
                variant="standard"
              >
                <Box
                  component="span"
                  sx={{
                    bgcolor: "#FFD700",
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                  }}
                />
              </Badge>
            </Box>
            <Box>
              <Typography>{leader[0].name}</Typography>
            </Box>
          </>
        )}
      </Grid>
      <Grid xs display="flex" alignItems="center" flexDirection={"column"}>
        <Box height="2rem" />
        {leader[2] && (
          <>
            <Box>
              <Badge
                color="secondary"
                overlap="circular"
                badgeContent="3"
                variant="standard"
              >
                <Box
                  component="span"
                  sx={{
                    bgcolor: "#FFD700",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                  }}
                />
              </Badge>
            </Box>
            <Box>
              <Typography>{leader[2]?.name}</Typography>
            </Box>
          </>
        )}
      </Grid>
    </Grid>
  );
}

export default HallOfFame;
